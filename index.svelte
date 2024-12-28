<script>
  import { onMount } from 'svelte';

  let workspace;

  // Dynamically import Blockly and Python blocks on component mount
  onMount(() => {
    import('blockly/core').then((Blockly) => {
      // Dynamically import Python blocks after core Blockly is loaded
      import('blockly/python').then(() => {
        workspace = Blockly.inject('blocklyDiv', {
          toolbox: document.getElementById('toolbox'),
        });
        console.log('Blockly initialized');
      }).catch((error) => {
        console.error('Error loading Python blocks:', error);
        alert('Failed to load Python blocks. Please check the console for details.');
      });
    }).catch((error) => {
      console.error('Error loading Blockly:', error);
      alert('Failed to load Blockly. Please check the console for details.');
    });
  });

  // Function to generate Python code from Blockly workspace
  function generateCode() {
    if (workspace) {
      const code = Blockly.Python.workspaceToCode(workspace);
      console.log(code); // Print the generated Python code to the console
      alert(code); // Show the generated code in an alert (optional)
    } else {
      console.error('Workspace is not initialized yet.');
      alert('Workspace is not ready. Please try again later.');
    }
  }
</script>

<style>
  /* Style for Blockly workspace */
  #blocklyDiv {
    height: 480px;
    width: 100%;
    border: 1px solid #ccc;
  }

  /* Style for the button */
  button {
    display: block;
    margin: 20px auto;
    padding: 10px 20px;
    font-size: 16px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  button:hover {
    background-color: #45a049;
  }
</style>

<!-- Blockly workspace container -->
<div id="blocklyDiv"></div>

<!-- Toolbox XML configuration for Blockly -->
<xml id="toolbox" style="display: none">
  <block type="controls_if"></block>
  <block type="logic_compare"></block>
  <block type="logic_boolean"></block>
  <!-- Add other blocks as needed -->
</xml>

<!-- Button to generate Python code -->
<button on:click={generateCode}>Generate Python Code</button>
