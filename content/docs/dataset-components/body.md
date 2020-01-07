---
title: "Body"
metaTitle: ""
metaDescription: ""
weight: 2
---

🖼 Dataset Components Header

## Overview

A Qri dataset's Body is *the data itself*.  It's the rows and columns of values that came from a CSV file, and now live in a Qri dataset along with other components.

Think about the body as a *single table* of data, and the other components as information that complements the body.

## Body is Required

Body is a required component, a Qri Dataset cannot exist without a body.

## Relationship to Structure

Body is closely linked to the [structure](/docs/dataset-components/structure) component, which stores information about column types, validation rules, and more.

Qri depends on structure to be able to interpret the body.  If you create a dataset from a CSV, the structure is inferred on import.  

## Constraints

Body is the component of a Qri Dataset that can get __BIG__.  Qri is intended for use with datasets whose body component is less than 1GB in size.  Qri uses pagination to load small sections of the body on demand.  

The body may contain invalid data.  For example, the structure component may define a column as numeric, but some of the column's values in the body contain text.  Qri can be configured to enforce validity when committing changes using strict mode.

Bodies may not contain corrupt data.  

## Other Body Formats

Qri Desktop is optimized for CSV bodies, but Qri's underlying technology can handle other formats, including json, xlsx, and cbor.
