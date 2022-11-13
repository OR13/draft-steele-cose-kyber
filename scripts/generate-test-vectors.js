
const { kyber } = require('kyber-crystals');
const base64url  = require('base64url');
const fs = require('fs');
const path = require('path');
// TODO: COSE version of these...

const keyPairToJwk = (publicKey, privateKey)=>{
  const jwk = {
    kty: 'Kyber',
    alg: 'Kyber-1024',
    x: base64url.encode(Buffer.from(publicKey))
  }
  if (privateKey){
    jwk.d = base64url.encode(Buffer.from(privateKey))
  }
  return JSON.parse(JSON.stringify(jwk, null, 2))
}

const privateKeyJwkToPublicKeyJwk = (privateKeyJwk)=>{
  const jwk = privateKeyJwk
  const {d, ...publicKeyJwk} = jwk
  return JSON.parse(JSON.stringify(publicKeyJwk, null, 2))
}

const jwkToKeyPair = (jwk)=>{
  const {x, d} = jwk
  const r = {}
  r.publicKey = Uint8Array.from(base64url.toBuffer(x))
  if (d){
    r.privateKey = Uint8Array.from(base64url.toBuffer(d))
  }
  return r;
}

const encrypt = async (publicKeyJwk) => {
  const {publicKey} = jwkToKeyPair(publicKeyJwk)
  const {cyphertext, secret} = await kyber.encrypt(publicKey)
  return {
    cyphertext:  base64url.encode(Buffer.from(cyphertext)),
    secret: base64url.encode(Buffer.from(secret)),
  }
}

const decrypt = async (cyphertext, privateKeyJwk) => {
  const {privateKey} = jwkToKeyPair(privateKeyJwk)
  const ct =  Uint8Array.from(base64url.toBuffer(cyphertext))
  const pt = await kyber.decrypt(ct, privateKey)
  return base64url.encode(Buffer.from(pt))
}



function testWhite(x) {
  var white = new RegExp(/^\s$/);
  return white.test(x.charAt(0));
};

// rfc8792
function wordWrap(str, maxWidth = 64) {
  var newLineStr = "\\\n"; done = false; res = '';
  while (str.length > maxWidth) {                 
      found = false;
      // Inserts new line at first whitespace of the line
      for (i = maxWidth - 1; i >= 0; i--) {
          if (testWhite(str.charAt(i))) {
              res = res + [str.slice(0, i), newLineStr].join('');
              str =  str.slice(i + 1);
              found = true;
              break;
          }
      }
      // Inserts new line at maxWidth position, the word is too long to wrap
      if (!found) {
          res += [str.slice(0, maxWidth), newLineStr].join('');
          str = "\\" + str.slice(maxWidth);
      }

  }

  return res + str;
}


const writeMarkdown = (outputFilePath, outputFileContent)=>{
  return fs.writeFileSync(path.resolve(__dirname, outputFilePath), outputFileContent)
}


(async ()=>{
  // console.log('generating test vectors...')
  const keyPair = await kyber.keyPair()
  const privateKeyJwk = keyPairToJwk(keyPair.publicKey, keyPair.privateKey)
  const publicKeyJwk = privateKeyJwkToPublicKeyJwk(privateKeyJwk)
  const {cyphertext, secret} = await encrypt(publicKeyJwk)
  // console.log({cyphertext, secret})
  const pt = await decrypt(cyphertext, privateKeyJwk)
  // console.log(pt)

  let markdown = ''

  // console.log({publicKeyJwk, privateKeyJwk, cyphertext, secret})
  markdown += `## ${publicKeyJwk.kty} ${publicKeyJwk.alg}\n\n`
  markdown += "### publicKeyJwk\n~~~ json\n" + wordWrap(JSON.stringify(publicKeyJwk)) +"\n~~~\n\n"
  markdown += "### privateKeyJwk\n~~~ json\n" + wordWrap(JSON.stringify(privateKeyJwk)) +"\n~~~\n\n"
  markdown += "### cyphertext\n~~~\n" + wordWrap(cyphertext) +"\n~~~\n\n"
  markdown += "### secret\n~~~\n" + wordWrap(secret) +"\n~~~\n\n"
  markdown += "\n"

  writeMarkdown(`../draft-steele-cose-kyber-test-vectors.md`, markdown)
})()