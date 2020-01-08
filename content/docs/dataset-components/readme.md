---
title: "Readme"
metaTitle: "The Qri Readme Component"
metaDescription: "The readme component is free-form text used to describe a dataset.
"
weight: 4
---

import InfoBlock from '../../../src/components/InfoBlock.js'

🖼 Dataset Components Header

## Overview

The readme component is free-form text used to describe a dataset.

A readme component is not required, but adding a readme is a best practice for creating healthy datasets in Qri.

## Markdown

Dataset readmes support markdown for adding hyperlinks, images, headers, and other rich text.  Qri Desktop and Qri Cloud both display rendered versions of the readme as HTML.

## An Example Readme

Here's a simple example readme for a dataset, telling the dataset users where the data came from, how it was transformed from the source data, and how to get in touch for more information.

```text
# My Nifty Dataset

This dataset is a cleaned up version of some canonical dataset published at [this open data portal](https://data.somecity.gov)


## Cleanup

To cleanup the original data, I used R studio to concatenate `column_a` and `column_b` into `column_c`


## Time Zone Warning

`timestamp_column` has no timezone specified, so some programs may import it as UTC.  Be sure to offset for local time on import.


## Contact me

Find me on twitter as @some_data_user if you have any questions or want to collaborate!

```

## Readmes in Qri Desktop

You can use Qri Desktop to edit a dataset's readme.  Navigate to the Dataset Pane for a dataset you own, then click 'readme' in the status tab.

## Readmes in Qri CLI

<InfoBlock>
  See <a href="/docs/reference/dataset-specification/">Dataset Specification</a> for detailed documentation of Qri dataset components.
</InfoBlock>
