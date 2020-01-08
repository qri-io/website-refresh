---
title: "Completing Metadata"
metaTitle: ""
metaDescription: ""
weight: 1
---

The meta component includes structured metadata based on established standards for cataloging datasets.  Completing a dataset’s metadata adds value for future you and other dataset collaborators.  Metadata also helps make your dataset more discoverable when shared publicly or with your colleagues.  (Think “show me all datasets tagged with category ‘demographics’)



Like all Qri components, changes to metadata aren’t locked away in some cloud database, they live right alongside your data and are version controlled.  Let’s import a dataset and add some standard metadata in Qri Desktop:

Create a new dataset from a CSV
Use the meta pane
Add a title
Add a description
Add keywords
Make a commit


Under the hood, the metadata is a JSON object.  If the standard fields don’t meet your needs, you can create your own metadata structure and commit it using Qri’s command-line tools.

[ These steps assume you have already completed <Qri Setup> ]

Create a new dataset from a CSV
Checkout the dataset
Create a file called meta.json in the working directory
Craft your metadata as JSON
Track working changes using qri status
Commit changes using qri commit
