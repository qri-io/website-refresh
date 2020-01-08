---
title: "Structure"
metaTitle: "The Qri Structure Component"
metaDescription: "The structure component defines the characteristics of a dataset document necessary for a machine to interpret the dataset body"
weight: 5
---

import InfoBlock from '../../../src/components/InfoBlock.js'


## Overview
The __structure__ component defines the characteristics of a dataset document necessary for a machine to interpret the dataset [body](/docs/dataset-components/body).

Structure includes things like the encoding data format (JSON,CSV,etc.), length of the dataset body in bytes, etc, and is stored in a rigid form intended for machine use. A well defined structure & accompanying software should allow the end user to spend more time focusing on the data itself.

## Schema

The structure component contains a property named `schema`, which is a [JSONSchema](https://json-schema.org/) document used to describe the body.  For a CSV, schema contains information such as column names, column types, acceptable ranges of values, etc.  

Schemas are useful for validation of Qri datasets.  Users can apply rules in the schema and Qri will report back on invalid values.  Applying "strict mode" to commits will prevent the creation of new versions with an invalid body.

## Structure in Qri Desktop

## Structure in Qri CLI

<InfoBlock>
  See <a href="/docs/reference/dataset-specification/">Dataset Specification</a> for detailed documentation of Qri dataset components.
</InfoBlock>
