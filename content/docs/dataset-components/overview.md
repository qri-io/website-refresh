---
title: "Components Overview"
metaTitle: "Overview of Qri Dataset Components"
metaDescription: "Qri defines a __dataset__ as a set of _components_, each with its own format and requirements."
weight: 1
---

import InfoBlock from '../../../src/components/InfoBlock.js'

Qri defines a __dataset__ as a set of _components_, each with its own format and requirements.  

For example, a CSV of tabular data, structured metadata, and a markdown readme can all live together under a single Qri dataset.  A change to any individual component constitutes a new version of the collective dataset. A Qri dataset contains everything you *wish* you had when you download a CSV from the internet:

<div id="dataset_components">
  <div class="left descriptions">
    <a href="../../../docs/reference/dataset#commit" id="commit" class="description">
      <h4 class="commit">Commit</h4>
      <p>versioning &amp; attribution for this dataset at a specific point in time</p>
    </a>
    <a href="../../../docs/reference/dataset#viz" id="viz" class="description">
      <h4 class="viz">Viz</h4>
      <p>template details for visually representing this dataset</p>
    </a>
    <a href="../../../docs/reference/dataset#body" id="body" class="description">
      <h4 class="body">Body</h4>
      <p>"the data". All other components are about the body.</p>
    </a>
  </div>

<p></p><div id="diagram" class="diagram">
    <img src="/img/diagrams/dataset_document.png" />
  </div><p></p>

<p></p><div class="right descriptions">
    <a href="../../../docs/reference/dataset#meta" id="meta" class="description">
      <h4 class="meta">Meta</h4>
      <p>descriptive metadata based on the DCAT specification</p>
    </a>
    <a href="../../../docs/reference/dataset#transform" id="transform" class="description">
      <h4 class="transform">Transform</h4>
      <p>an embedded script for updating this dataset</p>
    </a>
    <a href="../../../docs/reference/dataset#structure" id="structure" class="description">
      <h4 class="structure">Structure</h4>
      <p>machine-oriented metadata for interpreting body, including a schema.</p>
    </a>
  </div>
</div>

<InfoBlock>
  See <a href="/docs/reference/dataset-specification/">Dataset Specification</a> for detailed documentation of Qri dataset components.
</InfoBlock>
