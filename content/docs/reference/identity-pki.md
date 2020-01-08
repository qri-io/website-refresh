---
title: "Identity and PKI"
metaTitle: ""
metaDescription: ""
weight: 1
---

Identity, or the ability to determine who committed changes to a dataset, is an important aspect of improving data provenance.  When you create a Qri Dataset, each commit is attributed to a specific user, and is signed using that user’s private key.  Other Qri users use the original user’s public key to verify the dataset, proving its origins.

Running `qri setup` creates a local IPFS repository and creates a public and private keypair.  
- Something about how this keypair can be used independently of Qri Cloud
-

Qri Cloud adds another level of identity, connecting a Qri node’s keypair to a unique username and email address.  This is part of the hybrid centralized/decentralized model we have adopted to help bootstrap dataset sharing via Qri.
