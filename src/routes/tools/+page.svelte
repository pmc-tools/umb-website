<script>
import Button from '$lib/Button.svelte';
</script>

<div class=content>
<h1>Many Tools Support the UMB Format</h1>

<div class=cards>
<div class=card>
	<a class=tool-logo href=https://stormchecker.org><img class=tool-logo src='toolLogos/storm.svg' /></a>
	<p>Storm (version 1.12) integrates UMB support (either compressed or uncompressed) for import and export of Markov automata, stochastic games, POMDPs and all their special cases, including interval- or rational-valued transitions and including rich annotations on states and observations. The support is deeply embedded and thus Storm provides an interface also to, e.g., fault trees or Petri nets, or can be used to provide, e.g., bisimulation quotients of models.</p>
	<Button href=https://stormchecker.org>Visit Site</Button>
</div>
<div class=card>
	<a class=tool-logo href=#><img class=tool-logo src='toolLogos/modest.svg' /></a>
	<p>In the Modest toolset, the <code>mcsta</code> probabilistic model checker has been rebuilt around the UMB format.
Its internal data structures match the files and binary representation of UMB, allowing <code>mcsta</code> to load UMB files by simply mapping them into memory via <code>mmap</code>.
It supports reading UMB files encoding LTSs, DTMCs, CTMCs, MDPs, and MAs, and can generate files for such models
given in JANI or the Modest language.
As working with unchecked pointers/array indexing on untrusted UMB data could easily create security vulnerabilities, <code>mcsta</code> includes a strict UMB validator that thoroughly checks the metadata and binary files for semantic consistency and data ranges.</p>
	<Button href=#>Visit Site</Button>
</div>
<div class=card>
	<a class=tool-logo href=https://prismmodelchecker.org><img class=tool-logo src='toolLogos/prism.svg' /></a>
	<p>PRISM, as of version 4.10, provides UMB import and export for all models supported by both the tool and the format, notably Markov chains, MDP and POMDPs, interval variants of all these, and LTSs.
This includes rewards, atomic propositions, valuations for states/observations
and either floating point or exact arithmetic models.
PRISM-games, as of version 3.2.2, provides the same functionality for turn-based stochastic games.
Support for reading and writing UMB files has been implemented as a standalone Java library <code>umbj</code>.</p>
	<Button href=https://prismmodelchecker.org>Visit Site</Button>
</div>
<div class=card>
<b>Other tools</b>: The tools Paynt, Stormvogel and STAMINA use parts of Storm, and thus can also now import and export <code>.umb</code> files.
Similarly, PET, which uses Prism's input parser, will support UMB through Prism's <code>umbj</code> library.
</div>
</div>

</div>

<style>
.cards {
	display: flex;
	flex-direction: column;
}

.card {
	display: block;
	border-bottom: 1px solid #444;
	padding: 20px 0px;
}

.tool-logo {
	width: 200px;
}

.tool-logo:hover {
	border: none;
}
</style>
