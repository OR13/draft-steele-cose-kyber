---
title: "COSE Kyber"
category: info

docname: draft-steele-cose-kyber-latest
submissiontype: IETF  # also: "independent", "IAB", or "IRTF"
number:
date:
consensus: true
v: 3
area: "Security"
workgroup: "CBOR Object Signing and Encryption"
keyword:
 - COSE
 - JOSE
venue:
  type: "Working Group"
  mail: "cose@ietf.org"

author:
 -
    fullname: Orie Steele
    organization: Transmute
    email: orie@transmute.industries



normative:
  RFC7515: RFC7515


informative:
  I-D.draft-cfrg-schwabe-kyber: KYBER

--- abstract

This specification defines how to represent cryptographic keys for Kyber, an IND-CCA2-secure key encapsulation mechanism (KEM), for use with the key representation formats of JSON Web Key (JWK) and COSE (COSE_Key).

--- middle

# Introduction

TODO Introduction

For additional details regarding kyber [see pq-crystals.org/kyber](https://pq-crystals.org/kyber/).

# Conventions and Definitions

{::boilerplate bcp14-tagged}

## Representation Definition

The following definitions apply to the lattice based key encapsulation mechanism known as Kyber.

### JSON Web Key Representation

When expressing a cryptographic key for these lattices in JSON Web Key (JWK) form, the following rules apply:

- The parameter "kty" MUST be present and set to "OKP".
- The parameter "lat" MUST be present and value MUST be one defined in (#lattice-parameter-registration).
- The parameter "x" MUST be present whose value represents the public key. This value MUST be encoded using the serialization defined in {{-KYBER}} Appendix C and MUST be base64url encoded without padding as defined in {{-RFC7515}} Appendix C.
- The parameter "d" MUST be present for private key representations whose value MUST contain the little-endian representation of the private key base64url encoded without padding as defined in {{-RFC7515}} Appendix C. This parameter MUST NOT be present for public keys.

### Lattice Parameter Registration {#lattice-parameter-registration}

| kty | lat         |
| OKP | Kyber-1024  |
| OKP | Kyber-768   |
| OKP | Kyber-512   |

# Security Considerations

TODO Security

# Test Vectors

TODO Test Vectors

## OKP Kyber-1024

### publicKeyJwk
```
{
  "kty": "OKP",
  "lat": "Kyber-1024",
  "x":\
"WhsBzzR94zp2ZaVSpddmugzAoZRgfoMPiAFqbthmRMxXIAZQMytvYIYPQEQyINitxxa\
\hPgd7b6Ix4PIpSpkeUnSSJxgY0KAtuiyiHoa2uQIjHkhsNNh3PFcCdvYUvVUwGtonEY\
\WrwGMW0SyzGFFqrbKDPsUPzmk7AQy6GSoVv7CfchlVcFmN6WaRZMrLO2hU1cN60Xwd8\
\UQXwBA9YwxeD1y9YCKvUTUV8YdfDLs2zZUTEOu7mccBkPgUYfV80jeXpdsqfFRyQ1gT\
\D2tLLuUKnvrACdCxNmfGZxQcWgA37_AR6eBVKyWsMwbMtPFd7olXiSyLrTscLsgYFKL\
\MGDk5L6RJzfujPzNwwEIU-UCVknNuSHq16bF_Czy7gwXKdoNpzEOJG7FL1BI2j-eAOo\
\oGEZKIOHq8qMqc-cc7SHyJnrYQESlp3zx9yXcscrRMCcaO6xGTLpBDlEGKTaopl_rCG\
\cceRWmFCoBnj2xotjpLeuw7dwer9kS089KFZToGr0vCfYm4wkJgSXFQYPCyvpFTfbQW\
\x_eIpwp4FCep2mZ92pyi1pYwHVIsVABfnXo_H_pd0ESPzntHOcs0VPjA1nWYglBJqkG\
\c11u2KtBUJ_OmmyYedqxxOnW2uxWFqFtGC8ijk4JL0tKxvOZUNJA9AKYoBbOFoJtwCS\
\N623hj4OhZfqVcaREvjJWFyVxc7mfIqsNP10wrPGa3UJMMXxaJd0svEFdBNMylj5Cdd\
\kabp1V7-ux2ckS7PbJ-noGZCip2fMdU4tUT4jEkyglY4AuViJQKu8Ef0DGcq3BEpEZr\
\s1FMQHEOpvAbw0RDtMl8vuqWkZy8VeAATVCrV5UN7cIH7-FnlVIDlZu4APmbTopZ2MR\
\0mqlQtoSAtAGK-Zk4REPPnfGgq7Q2_YgrQHJu8NmWSRLPPDu8NuxzIySFbTgpQNawTJ\
\uGG5NoOnKihrSARgEItNtRlZUUruC7JeSUjOab5uO8R2SAUVBEMSdob0MBQlI1zHdO7\
\LdO_0CpUjB41odGy7B4SSMLXOggoaAe-6a3uKeK5kwzXaBpcPMCZ1Ie-jcjiTCDRdsg\
\qflfe9hlZHx7b9lNM7JEJ6grTHNF1jA7WEE_j8dhnxBIf_N3fYop-xSNIqibL8iixZP\
\Bz0xYDtBbYoQZhSaBKCdL5qGNMklhpAEKryFo96G8UbEBOrAMRSqMRtKjnDo5XkHMl1\
\hsN5VnCPShwTJ45Kwb-eVR0uOvC5u1wiQV1Ju-YRR6dptiHXXLhLs1m7c_EVwAyXBca\
\oevMtNvZSMOQTGR0pCGMfUyesO5eXscxqAtYFzL2jnHhaqd0rk1LDa3UOV18BKK1LS5\
\Sgcr4xYWUPI7hTZgL2Z83IcMHMjKjXOLGXzHt-dId4qGtSVKAWKVBFYPgoMM53hfvYV\
\sfYCDfeqvo2iv_Nlh8XysLQpqSlIE5YRdOIOiInopKPE92fNORzxu0OF3x0WFOQwZo6\
\Cg0FgHpyC3ayCkJHcxmZUrk-oHTpEPgBxQdsF-0hUkZglzzQokI2oIxMACY4izsdyeX\
\NShDGM68vd3qyFrX_bF2UPG1dC-Lml9ziu_K6AlvReI9RA-W1lqLfV6ONYsrdiukASa\
\J6wn-5iK1dKvPoQ6gTstROaEIpAhBtcUUWqx0cYYHOzI5BWKGsGZTiB75nM9udW8IQY\
\mxTlaS7bH5IgbDNqk5qsrwopC6BBTHzsnC3q153GeL9w373Y8eiqrzcZlVxh-j9O4Fl\
\hFiQobqsIOv1dssGBX2jxaA6dqMjuPyXA3MPeiuCMYNIud9tYET_mgSuCE6lpmPyEwD\
\PZ8FuyUfGdOjRpPXAl6LnR_uJiZc2IGowhAiRl7b1Gt1Se7NqJEijpiWnKP_FTCctoD\
\onZv4VuNBbhgd7jEIcOkeTa0v_NplBhc7Oa-UzcP02FdRfhe_ABNlgtofKGL3JoAL1h\
\IL5NV4DOEkGQEEUmT5zdj3QBW92gOPmqTLblpSPIawWhIgjs_zBy6yMgX-kmHjiqRbL\
\GjAPQihgx02gJNl0ak8wakDwas0UU8FwEBFgjIqeGoS70kuJkh3mahkk8YbSxXB1AzE\
\LxuOCl5TOexDg4"
}
```

### privateKeyJwk
```json
{
  "kty": "OKP",
  "lat": "Kyber-1024",
  "x":\
"WhsBzzR94zp2ZaVSpddmugzAoZRgfoMPiAFqbthmRMxXIAZQMytvYIYPQEQyINitxxa\
\hPgd7b6Ix4PIpSpkeUnSSJxgY0KAtuiyiHoa2uQIjHkhsNNh3PFcCdvYUvVUwGtonEY\
\WrwGMW0SyzGFFqrbKDPsUPzmk7AQy6GSoVv7CfchlVcFmN6WaRZMrLO2hU1cN60Xwd8\
\UQXwBA9YwxeD1y9YCKvUTUV8YdfDLs2zZUTEOu7mccBkPgUYfV80jeXpdsqfFRyQ1gT\
\D2tLLuUKnvrACdCxNmfGZxQcWgA37_AR6eBVKyWsMwbMtPFd7olXiSyLrTscLsgYFKL\
\MGDk5L6RJzfujPzNwwEIU-UCVknNuSHq16bF_Czy7gwXKdoNpzEOJG7FL1BI2j-eAOo\
\oGEZKIOHq8qMqc-cc7SHyJnrYQESlp3zx9yXcscrRMCcaO6xGTLpBDlEGKTaopl_rCG\
\cceRWmFCoBnj2xotjpLeuw7dwer9kS089KFZToGr0vCfYm4wkJgSXFQYPCyvpFTfbQW\
\x_eIpwp4FCep2mZ92pyi1pYwHVIsVABfnXo_H_pd0ESPzntHOcs0VPjA1nWYglBJqkG\
\c11u2KtBUJ_OmmyYedqxxOnW2uxWFqFtGC8ijk4JL0tKxvOZUNJA9AKYoBbOFoJtwCS\
\N623hj4OhZfqVcaREvjJWFyVxc7mfIqsNP10wrPGa3UJMMXxaJd0svEFdBNMylj5Cdd\
\kabp1V7-ux2ckS7PbJ-noGZCip2fMdU4tUT4jEkyglY4AuViJQKu8Ef0DGcq3BEpEZr\
\s1FMQHEOpvAbw0RDtMl8vuqWkZy8VeAATVCrV5UN7cIH7-FnlVIDlZu4APmbTopZ2MR\
\0mqlQtoSAtAGK-Zk4REPPnfGgq7Q2_YgrQHJu8NmWSRLPPDu8NuxzIySFbTgpQNawTJ\
\uGG5NoOnKihrSARgEItNtRlZUUruC7JeSUjOab5uO8R2SAUVBEMSdob0MBQlI1zHdO7\
\LdO_0CpUjB41odGy7B4SSMLXOggoaAe-6a3uKeK5kwzXaBpcPMCZ1Ie-jcjiTCDRdsg\
\qflfe9hlZHx7b9lNM7JEJ6grTHNF1jA7WEE_j8dhnxBIf_N3fYop-xSNIqibL8iixZP\
\Bz0xYDtBbYoQZhSaBKCdL5qGNMklhpAEKryFo96G8UbEBOrAMRSqMRtKjnDo5XkHMl1\
\hsN5VnCPShwTJ45Kwb-eVR0uOvC5u1wiQV1Ju-YRR6dptiHXXLhLs1m7c_EVwAyXBca\
\oevMtNvZSMOQTGR0pCGMfUyesO5eXscxqAtYFzL2jnHhaqd0rk1LDa3UOV18BKK1LS5\
\Sgcr4xYWUPI7hTZgL2Z83IcMHMjKjXOLGXzHt-dId4qGtSVKAWKVBFYPgoMM53hfvYV\
\sfYCDfeqvo2iv_Nlh8XysLQpqSlIE5YRdOIOiInopKPE92fNORzxu0OF3x0WFOQwZo6\
\Cg0FgHpyC3ayCkJHcxmZUrk-oHTpEPgBxQdsF-0hUkZglzzQokI2oIxMACY4izsdyeX\
\NShDGM68vd3qyFrX_bF2UPG1dC-Lml9ziu_K6AlvReI9RA-W1lqLfV6ONYsrdiukASa\
\J6wn-5iK1dKvPoQ6gTstROaEIpAhBtcUUWqx0cYYHOzI5BWKGsGZTiB75nM9udW8IQY\
\mxTlaS7bH5IgbDNqk5qsrwopC6BBTHzsnC3q153GeL9w373Y8eiqrzcZlVxh-j9O4Fl\
\hFiQobqsIOv1dssGBX2jxaA6dqMjuPyXA3MPeiuCMYNIud9tYET_mgSuCE6lpmPyEwD\
\PZ8FuyUfGdOjRpPXAl6LnR_uJiZc2IGowhAiRl7b1Gt1Se7NqJEijpiWnKP_FTCctoD\
\onZv4VuNBbhgd7jEIcOkeTa0v_NplBhc7Oa-UzcP02FdRfhe_ABNlgtofKGL3JoAL1h\
\IL5NV4DOEkGQEEUmT5zdj3QBW92gOPmqTLblpSPIawWhIgjs_zBy6yMgX-kmHjiqRbL\
\GjAPQihgx02gJNl0ak8wakDwas0UU8FwEBFgjIqeGoS70kuJkh3mahkk8YbSxXB1AzE\
\LxuOCl5TOexDg4",
  "d":\
"kkFs-2JB7qgGenc4aRKADMKlbvxSnoS2TzGR0BaMegaaMrsFt8S9t8VousoUSchKnou\
\aD5lb86tixtoOMRs-xFdFADluFNl57bp2uHplvxoF6HZoKkA3pPC3R4e311UWcGux_E\
\BUgIehGANR0rqcefRQ-daTPlB8d7bEDytdHPSv50hnk1OId9DM80gFvNifWhMpkEW9M\
\ac7YAQV8lRCqptnc-peDvIjF6kck1terydS1SdsvNs80gLFDfCVYPydx3IiVfFmvhYe\
\QjY1tCEVaWoNcEWH9IN7F2YiVxYQbFwZLCBhdEyejtGNXnHJYPBR5mSWbeaYiLAJ-mi\
\uBmNaTCONlNoXz_u0Q_dhayUHCXuWRhgqECagVoYvwZAj3eKHJKSy8bOd5sZi0Yi5xb\
\EcvUtB6eOWN8uQalGGHMc2lWN6npZvOGJ5MiVUf0lexEV-PSdT4IuQEgqHwybA2hMCu\
\XeMRcGCWpgvL6uMiNBL7GrAOwkb__qbvbhMrJbNsgOBhauk0xIxM_uouwRj4GnFp_Kp\
\vZQ1DhOeUogfjNqPoEFBBuyv3USzP_QsAjua6pqCkXgkvfeZEaoyBrAEZXB5M0pZenR\
\sPiarw7pdFKFQtxMI51xtpwynNLnHSahkaLuRlrkcezK4wQIVy8F4wQJ4CrAabNI9-s\
\xYZlbDr3x3OIptyVbCvckSfKdofIXJCGGBdmqXuvOwVfpxqjRhHrOkpZo7B2AwrKRLP\
\oseIvp2hKR8MwY_7UVk5tNCnXil2Xc1pnZHeFs4fBi1C9vEUhAozgRteYG5D4pZFTsZ\
\MZCHycpt_rDGjLMV48CbhzlH_uReMBoNLia1WhUPVzqYULsRm6hfVvo1mlScdSajy8G\
\bjwxejShgy0HCufM_rmK7WjS3JAo-C4ShqJVCCJo1slxMMUQcsnxFUKcq_5CzePyMgs\
\vE6KIVODWlsYceecJ0KKdb1YJgOyC3Zdosw6CEhlJ_Cnd8Zfp5yTtb_uK_qdKBY6YWm\
\eVYGbuEASi-G5hmJHB52MPNhvdq8Ai3Q5tEDrk6N_iQ5PGRoMWjG8UxZpCj_NiH1XWp\
\ThCA-qVaFnq2sNSal8rOO5h-I3wiuzphSgktIPVJ7BouuDhNp6mD01Yb8ukzEwAFv0B\
\Js1pr-LNFadgELRuNVbt1dKYVRxFszwqCIIY3K4o-t7QuY9NKKOl_WXaCOVCxOhRDAr\
\RBJ_KGpqkbZ6FAjQyPQMykxpl-sCAOt7YAAigpHViydgsGQJScw0lBEDEU3LwcBVao5\
\UAXlZuvuCde2VMF7eYBZfVA_nBhrvtfPPsqK1NkordaaWuqx3FlqXpQVdKHRYmlish8\
\G4xxjiBcOZnOOhwcg2CmV-FH4bZ9GeHJCHGgd2aVRzxGgNJQy_aXlKUvvfzDDfZeO0B\
\ZajyjS6s_KbVFKVmMZgNoC3V3NVi8qYKJtnQWodgKVrm19XtgMlt_IXuUy5EHrqzH9u\
\hbRVws5vdPHyit7ppq5nKJYHZ9vxwI5pVEkpXBGHIixmZB_McB5zU9zkWINUO5xip70\
\uC7StaMqoQErqa9NsODrocYtcB6YKCtEsEjWKmP1gDHfZJZ3XICIOSFOBAu3BR-6UEj\
\7whePdwFuUVJ5YnFUDG31DlO1PZqMiGCPOtDJ_ycRzECcFY0QTLG1NpvQNaA7DgUuDC\
\wkClZEGx-0VkutzW9CEvH7IZbUqmf4lNRmfQcWBxyznc_0kSizTsq2DxjtEaG0sCm6v\
\SfCnssr1jAtIxNKLUKwFQnGNMGi5BKfQlwm5MIpDe_-FpljAVqfRt-YmJlQSsdHvVS6\
\PsE5fA3l1AM6ZICEChFKzQsOJG5n9RkN-hyrwekvzRsd1LLysDA2iQ_y6lIf_sY6iUx\
\UBR3miMLd3S908oaDoUuO-UdYSlIKJCDCngwW2Y3EqQJQlV72tNeoadDw-K506tdsQE\
\HUwRyWNQDz9qaWqJ2pDRekrRbXOAyxOCG86cJ7gam1LE6ZOR23VJ5BwkgiuqYIBvAJM\
\IwjPpwe6QoFglaJpe_eRMDaPetErCmAfo83tcwWhsBzzR94zp2ZaVSpddmugzAoZRgf\
\oMPiAFqbthmRMxXIAZQMytvYIYPQEQyINitxxahPgd7b6Ix4PIpSpkeUnSSJxgY0KAt\
\uiyiHoa2uQIjHkhsNNh3PFcCdvYUvVUwGtonEYWrwGMW0SyzGFFqrbKDPsUPzmk7AQy\
\6GSoVv7CfchlVcFmN6WaRZMrLO2hU1cN60Xwd8UQXwBA9YwxeD1y9YCKvUTUV8YdfDL\
\s2zZUTEOu7mccBkPgUYfV80jeXpdsqfFRyQ1gTD2tLLuUKnvrACdCxNmfGZxQcWgA37\
\_AR6eBVKyWsMwbMtPFd7olXiSyLrTscLsgYFKLMGDk5L6RJzfujPzNwwEIU-UCVknNu\
\SHq16bF_Czy7gwXKdoNpzEOJG7FL1BI2j-eAOooGEZKIOHq8qMqc-cc7SHyJnrYQESl\
\p3zx9yXcscrRMCcaO6xGTLpBDlEGKTaopl_rCGcceRWmFCoBnj2xotjpLeuw7dwer9k\
\S089KFZToGr0vCfYm4wkJgSXFQYPCyvpFTfbQWx_eIpwp4FCep2mZ92pyi1pYwHVIsV\
\ABfnXo_H_pd0ESPzntHOcs0VPjA1nWYglBJqkGc11u2KtBUJ_OmmyYedqxxOnW2uxWF\
\qFtGC8ijk4JL0tKxvOZUNJA9AKYoBbOFoJtwCSN623hj4OhZfqVcaREvjJWFyVxc7mf\
\IqsNP10wrPGa3UJMMXxaJd0svEFdBNMylj5Cddkabp1V7-ux2ckS7PbJ-noGZCip2fM\
\dU4tUT4jEkyglY4AuViJQKu8Ef0DGcq3BEpEZrs1FMQHEOpvAbw0RDtMl8vuqWkZy8V\
\eAATVCrV5UN7cIH7-FnlVIDlZu4APmbTopZ2MR0mqlQtoSAtAGK-Zk4REPPnfGgq7Q2\
\_YgrQHJu8NmWSRLPPDu8NuxzIySFbTgpQNawTJuGG5NoOnKihrSARgEItNtRlZUUruC\
\7JeSUjOab5uO8R2SAUVBEMSdob0MBQlI1zHdO7LdO_0CpUjB41odGy7B4SSMLXOggoa\
\Ae-6a3uKeK5kwzXaBpcPMCZ1Ie-jcjiTCDRdsgqflfe9hlZHx7b9lNM7JEJ6grTHNF1\
\jA7WEE_j8dhnxBIf_N3fYop-xSNIqibL8iixZPBz0xYDtBbYoQZhSaBKCdL5qGNMklh\
\pAEKryFo96G8UbEBOrAMRSqMRtKjnDo5XkHMl1hsN5VnCPShwTJ45Kwb-eVR0uOvC5u\
\1wiQV1Ju-YRR6dptiHXXLhLs1m7c_EVwAyXBcaoevMtNvZSMOQTGR0pCGMfUyesO5eX\
\scxqAtYFzL2jnHhaqd0rk1LDa3UOV18BKK1LS5Sgcr4xYWUPI7hTZgL2Z83IcMHMjKj\
\XOLGXzHt-dId4qGtSVKAWKVBFYPgoMM53hfvYVsfYCDfeqvo2iv_Nlh8XysLQpqSlIE\
\5YRdOIOiInopKPE92fNORzxu0OF3x0WFOQwZo6Cg0FgHpyC3ayCkJHcxmZUrk-oHTpE\
\PgBxQdsF-0hUkZglzzQokI2oIxMACY4izsdyeXNShDGM68vd3qyFrX_bF2UPG1dC-Lm\
\l9ziu_K6AlvReI9RA-W1lqLfV6ONYsrdiukASaJ6wn-5iK1dKvPoQ6gTstROaEIpAhB\
\tcUUWqx0cYYHOzI5BWKGsGZTiB75nM9udW8IQYmxTlaS7bH5IgbDNqk5qsrwopC6BBT\
\HzsnC3q153GeL9w373Y8eiqrzcZlVxh-j9O4FlhFiQobqsIOv1dssGBX2jxaA6dqMju\
\PyXA3MPeiuCMYNIud9tYET_mgSuCE6lpmPyEwDPZ8FuyUfGdOjRpPXAl6LnR_uJiZc2\
\IGowhAiRl7b1Gt1Se7NqJEijpiWnKP_FTCctoDonZv4VuNBbhgd7jEIcOkeTa0v_Npl\
\Bhc7Oa-UzcP02FdRfhe_ABNlgtofKGL3JoAL1hIL5NV4DOEkGQEEUmT5zdj3QBW92gO\
\PmqTLblpSPIawWhIgjs_zBy6yMgX-kmHjiqRbLGjAPQihgx02gJNl0ak8wakDwas0UU\
\8FwEBFgjIqeGoS70kuJkh3mahkk8YbSxXB1AzELxuOCl5TOexDg72vmGI7tHAdjRysc\
\gjcWmxpLswUqKUKu4jZmt5nKoraZrIBvBRNRK0LQqN7KnTm8sXBefxSIaccTyiBKJdY\
\VCc"
}
```

### cyphertext
```text
iwkuhEMQ9Etgs_2vgDH3Xo9SSLGHKN2ajzCT8WhPLBdUWaU2aJjMGICqo-_e_hniJ30l\
\ZmH2OyDx3q399Z6qiEReY35EUNn-mixHCD9GZrx1eHv-UJCOHvODkQYdONsBDrEZO45\
\nxgAJ6GncQpF0z5cjwZ_efI_R5xlgPQQD4GxbRr1aE1fEy__ew9mms23k_xBi36wy0V\
\0FT3At6hV3VqpJuNaCMOuUn1FmusdcRHyDdMnbtoryxU3eADGZQLPY87VSzCORMtisj\
\LWJJGJYsixxeRqp_fD2ujYKySQPJutOfoSOTBSghv5aTlhCg5svWZz6f9mSD0EebXDJ\
\kzR2aMBkr6UfW4r9K0VYfBQ437l_uJ5l5NkZ9ZP-k7_oy318KCccO7Ur-o40fFYKm0i\
\AqMXTghwChxGy-nNyl5IZ0ElK3aiG6QZr0_wESQcNf37YLbgBoKVwNdn502_76wSYll\
\zY2s-RckiyE_39aT62Dl6JJbrDJLGtRkSWoLDmmUvCbWq4jAsyJR3WIk7deVZap-h7T\
\fAA0y6s_qRTbzIiKQdzm5jlyjUKIpoLicOB3KWNSbinRAi6ziL5-og1SE01iDZsfVKF\
\lzBAMKrYbzeVBxko_9PucXStC5Q1tZWao75mQVnUl2ZH06hgrJXzjgqkfrilEw46PoV\
\8fmcKcIOgHv8fYXNSoJA1ekzb3jciZRfbzsr18XOqqdDPQ1DfCaCurgJH5piZwvw-h8\
\k9ICPnLiQaPKA_1zKyZwgtcBrBaA2skKTblYeWOreK9q4mXJgFvsWop2MAHyzcegt_D\
\rkUVqLV4yiK7-shBG1yfe_hJb-SOaCBiNKm3K_XJEiSTO4g6-Pc0mEmSg0ZffE17Rqd\
\Kr2YjHA7Ct8BAWdtq5SWA8Lehhp0XpJnpb2pJg088LCkf6JMd9VD9G5JmIO5_9siLQ2\
\K70ty5dhaDwZynbsMIzHUXaEqaSBkwMSq1Awo_5Ed410DVuQB2QCmrduWMCvJ8inIQ9\
\JpvZvtrFghHhhwPXj20y3URNxjAx-BmcpJZkk4-no40OnaDYnO8s-PaPX-mjBUzKF6Z\
\31kJ9YgXp8rpt4uPGSVHmp8A49gPBqexiMaWeO9Rmo4NjF-8Nva3IqCMPfxeQ6UggNG\
\fCsPfVWda9vD0Jz32GJxFZwXcqIIJMe75Wl3FN-gCDBsiYEeGrghYnORjRKH6DfJyCa\
\CdumrdJzkwkvd47EteCXUr9Ko_FYMIDdKB-sH33tO3jlg7tJiwFQTZcNo7DW20R4Ixp\
\5Au6M1AwQ63Nyiu2nIQPaQTo9TKgUo0FJBKw5BFAwPQnBxeVwhiy49t_7-rxEsHtZj-\
\b144VmznDIZCxUsm43UaglcKwlUrf7SKDVtNhhY5eBh5uQDSQ_QxbxBEK8xJqoPG7A6\
\ozeFGi30r6UKhg-NhWcGeR5nGMV7wE4CLXUa2KL3ZK2D0_PezlY9JtIkO8_hKQxbXiT\
\AOJhuq0Lf3nUiPoU-mhfO5WhLEgSkD9emtBTsb09BsCuDJuHYXb6sthD86u5Dxr2oE1\
\HcA7iAjqHPVEzGE2VItnAGB2jIDClPvBdDbW07G3g6-DOg8vsoEIOCYQ7A0VKZO0bEy\
\Do2HH9hpSnnLhyBIAI5LA7qSA2qRTh5Voem4wLvsG4j1_akJGyATXBcJaQZsSWMT_pQ\
\DaMcej30Ll6ZeYMyZZrhdhDEAmpEA9By-ygFXJhMlne4ZEoO8dZdH2effO2nToX-7DF\
\5mivdb2dRc41IllRRqJvxk_umTdnj4PnNkEes3DzAC4Uh0oRRtOUjUJiZuoDpdGqM7K\
\G829ynmuxLxJrVhFsGfjJhfjtwbzTw0UmNIe__-KvcyPGCqnkim0jQg5QW0kZJFTzr7\
\g3pgMwHMRXPj1b7Q4jAxyh7e0FbuUZvkf72vUla2XA9yVkKrYQ8Sxh2ytlfa7BPGBF7\
\DZfwJZvqCp1NLzwJmfbkmYxNa0xqE9St4-GKKdFHvGdnyxwQLwvXRTIpI9h54HDAfo2\
\6GEqloUej_Pvc_O6jt8Xq9r-TPUu96FQc14EfznTJwC4Jr0f9tKjyIhyj9sylg62m8y\
\H5I1rK0bwlxaM
```

### secret
```text
gl1XhlnH6KJDONLbOLrPCiOj962g48Sk-W67hoSBRTo
```





# IANA Considerations

## JSON Web Key Lattice Registry

This specification establishes the IANA "JSON Web Key Lattice" registry for values of the JWK "lat" (algorithm) parameters.

This section establishes the IANA "JSON Web Key Lattice"
registry for JWK "lat" member values.  The registry records the lattice
name, implementation requirements, and a reference to the
specification that defines it.  This specification registers the
parameter names defined in {{lattice-parameter-registration}}.

The implementation requirements of a lattice may be changed over time
as the cryptographic landscape evolves, for instance, to change the
status of a lattice to Deprecated or to change the status of a lattice
from Optional to Recommended+ or Required.  Changes of implementation
requirements are only permitted on a Specification Required basis
after review by the Designated Experts, with the new specification
defining the revised implementation requirements level.

### Registration Template

Lattice Name:

: The name requested (e.g., "Kyber-768").  Because a core goal of this
specification is for the resulting representations to be compact,
it is RECOMMENDED that the name be short -- not to exceed 8
characters without a compelling reason to do so.  This name is
case sensitive.  Names may not match other registered names in a
case-insensitive manner unless the Designated Experts state that
there is a compelling reason to allow an exception.

Lattice Description:

: Brief description of the lattice (e.g., "Kyber-768 Lattice").

JOSE Implementation Requirements:

: The lattice implementation requirements for JWS and JWE, which must
be one the words Required, Recommended, Optional, Deprecated, or
Prohibited.  Optionally, the word can be followed by a "+" or "-".
The use of "+" indicates that the requirement strength is likely
to be increased in a future version of the specification.  The use
of "-" indicates that the requirement strength is likely to be
decreased in a future version of the specification.

Change Controller:

: For Standards Track RFCs, list "IESG".  For others, give the name
of the responsible party.  Other details (e.g., postal address,
email address, home page URI) may also be included.

Specification Document(s):

: Reference to the document or documents that specify the parameter,
preferably including URIs that can be used to retrieve copies of
the documents.  An indication of the relevant sections may also be
included but is not required.

### Initial Registry Contents

Kyber-768

- Lattice Name: Kyber-768
- Value: TBD (16 requested)
- Key Type: OKP
- Lattice Description: TODO
- JOSE Implementation Requirements: Optional
- Change Controller: IESG
- Specification Document(s): {{lattice-parameter-registration}}
- Recommended: Yes


--- back

# Acknowledgments
{:numbered="false"}

TODO acknowledge.
