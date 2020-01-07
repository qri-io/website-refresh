---
title: "Meta"
metaTitle: ""
metaDescription: ""
weight: 4
---

🖼 Dataset Components Header

## Overview

Meta contains human-readable descriptive metadata that qualifies and distinguishes a dataset.
Well-defined Meta should aid in making datasets Findable by describing a dataset in generalizable taxonomies that can aggregate across other datasets.

Because datasets are intended to interoperate with many other data storage and cataloging systems, meta fields and conventions are derived from existing metadata formats whenever possible.

## Standard Metadata

The specification for meta includes a set of "standard" fields based on the DCAT catalog standard.  These fields are described below, and must contain well-formed, valid values.



| name                  | type          | description   |
|-----------------------|---------------|---------------|
| `accessPath`          | `string`      | URL or location to access this dataset.   |
| `accrualPeriodicity`  | `string`      | frequency with which dataset changes. Must be an [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601#Repeating_intervals) repeating duration   |
| `citations`           | `[]Citation`  | array of assets used to build this dataset   |
| `contributors`        | `[]User`      | description   |
| `description`         | `string`      | roughly a paragraph of human-readable text that provides context for the dataset |
| `downloadPath`        | `string`      | URL or other path string to where to download this dataset   |
| `homePath`            | `string`      | URL or other path string to a "landing page" resource that explains the dataset  |
| `identifier`          | `string`      | identifier for the dataset   |
| `keywords`            | `[]string`    | string of "tags" to connect this dataset with other datasets that carry similar keywords   |
| `language`            | `[]string`    | array of languages this dataset is written, in [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) format, ordered by most-to-least dominant  |
| `license`             | `License`     | the legal licensing agreement this dataset is released under  |
| `title`               | `string`      | title of the dataset |
| `theme`               | `[]string`      | "categories" this dataset should be filed under. Keywords should draw out specific keywords, theme entires should speak to the broader family of datasets this dataset is part of  |
| `version`             | `string`      | version identifier string   |

### Additional Specifications



#### `Citation`

| name                  | type          | description   |
|-----------------------|---------------|---------------|
| `name`                | `string`      | Name of the person or entity being cited|
| `url`                 | `string`      | URL for the person or entity being cited|
| `email`               | `string`      | email address for the person or entity being cited|

_example:_

```json
  {
    "name" : "sean carter",
    "url" : "https://jayz.com",
    "email" : "hova@jayz.com"
  }
```

#### `License`

| name                  | type          | description   |
|-----------------------|---------------|---------------|
| `type`                | `string`      | The name of the license|
| `url`                 | `string`      | URL for more information about the specified license|

_example:_

<!--
docrun:
  filltype: json
-->
```json
  {
    "type" : "CC-BY-2",
    "url" : "https://creativecommons.org/licenses/by/2.0/"
  }
```

## Custom Metadata

The meta component is capable of storing arbitrary fields.  This means you can place additional values not listed under [standard metadata](/docs/dataset-components/meta#standardmetadatafields) and Qri will store them as-is, without any additional validation.

## Metadata are Descriptive, not Structural

Qri considers everything in the meta component to be _descriptive_ metadata, as opposed to _structural_ metadata. In practice this means qri user interfaces may leverage the meta component for the purposes of _correlation_ and _display_.

Information stored in __meta__ is _not_ intended for use by machines to interpret the dataset. For example, setting the `identifier` is of no significance to qri, it's included here for interoperability with other specifications like [DCAT](https://www.w3.org/TR/vocab-dcat/#Property:dataset_identifier)
