---
title: "Commit"
metaTitle: "The Qri Commit Component"
metaDescription: "The commit component contains details about the creation of a new version of a Qri dataset. "
weight: 6
---

import InfoBlock from '../../../src/components/InfoBlock.js'


## Overview

The commit component contains details about the creation of a new version of a Qri dataset.  It includes a `title` (short-form description) and `message` (long-form description) of the changes, usually provided by the user.  It also contains the timestamp, user identity, and a checksum of the dataset's body.

Commit is directly analogous to the concept of a Commit Message in the git version control system. A full commit defines the administrative metadata of a dataset version, answering _"who made this version of the dataset, when, and why"_.

## Commits in Qri Desktop

In Qri Desktop, an initial commit is automatically created when importing a CSV file.  After making changes to a dataset's components, the commit button will become enabled, inviting the user to commit their changes to a new version of the dataset.

Likewise, when reviewing the version history of any dataset, each version will have a commit tab.  This tab which presents the timestamp, user identity, title, and message for that version.

## Commits in Qri CLI

In Qri CLI, commits are created with the command `qri save`.  

<InfoBlock>
  See <a href="/docs/reference/dataset-specification/">Dataset Specification</a> for detailed documentation of Qri dataset components.
</InfoBlock>
