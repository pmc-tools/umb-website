<script lang="ts">
	import Banner from '$lib/Banner.svelte';
	import Button from '$lib/Button.svelte';
	import ToolLogos from '$lib/ToolLogos.svelte';
	import base from '$app/paths';
</script>

<Banner/>
<div class=content style="min-height: 300px;">
<h1>The Unified Model Binary Format</h1>

<p>UMB is a format for the explicit representation of Markov models, including Markov Decision Processes (MDPs), continuous and discrete time Markov chains (CTMCs and DTMCs), and partially observable models, notably POMDPs. Developed in Dagstuhl, Saarland by a panel of field experts, it is an open standard, with a reference implementation, <a href="{base}/umbi">UMBI</a>, and is compatible with many probabilistic model checking tools.</p>

<p>Because UMB is explicit, rather than abstract, it is a "compiled" model. It contains all states, nondeterministic actions, probabilistic branches, and labels in a manner that can simply be read into a tool, as opposed to parsing and building the state space from an abstract representation, like PRISM or JANI. This format does not replace PRISM or JANI, but supplements it.</p>
<blockquote>
<p>Three PRISM files for the probabalistic model checkers under the sky,<br/>
Seven for the <code>.tra</code>-parsers in their halls of stone,<br/>
Nine JANI files for PhD students doomed to die,<br/>
One format for the Dark Lord on his dark throne<br/>
In the Land of Dagstuhl where the shadows lie.<br/>
One format to rule them all, one format to find them,<br/>
One standard to bring them all and in compatibility bind them<br/>
In the Land of Saarland where the shadows lie.</p>
</blockquote>

<h3>UMB is supported by many tools:</h3>
<ToolLogos/>
</div>


