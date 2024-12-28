<script>
  import Blockly from 'blockly/core';  // Correct import syntax
  import 'blockly/python';  // Import Python blocks
  import { onMount } from 'svelte';
  import { defineCustomBlocks } from '$lib/customBlocks.js';

  let workspace;

  onMount(() => {
    workspace = Blockly.inject('blocklyDiv', {
      toolbox: document.getElementById('toolbox'),
    });
  });

  function generateCode() {
    const code = Blockly.Python.workspaceToCode(workspace);
    console.log(code);  // Print the generated Python code
  }
</script>

<!-- Blockly workspace container -->
<div id="blocklyDiv" style="height: 480px; width: 100%;"></div>

<!-- Toolbox XML configuration -->
<xml id="toolbox" style="display: none">
  <block type="controls_if"></block>
  <block type="logic_compare"></block>
  <block type="logic_boolean"></block>
  <!-- Add other blocks as needed -->
</xml>

<!-- Button to generate Python code -->
<button on:click={generateCode}>Generate Python Code</button>
