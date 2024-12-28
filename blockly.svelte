<script>
  import { onMount } from 'svelte';
  import { defineCustomBlocks } from '$lib/customBlocks.js'; // Import the custom blocks

  let workspace;

  onMount(() => {
    const loadScript = (src, callback) => {
      const script = document.createElement('script');
      script.src = src;
      script.onload = callback;
      script.onerror = (error) => {
        console.error(`Error loading script: ${src}`, error);
        alert('Failed to load required script.');
      };
      document.head.appendChild(script);
    };

    // Load Blockly core
    loadScript('https://unpkg.com/blockly@11.2.0/blockly_compressed.js', () => {
      console.log('Blockly core loaded');

      // Load Python block definitions
      loadScript('https://unpkg.com/blockly@11.2.0/python_compressed.js', () => {
        console.log('Python blocks loaded');

        // Load Blockly block definitions
        loadScript('https://unpkg.com/blockly@11.2.0/blocks_compressed.js', () => {
          console.log('Blockly blocks loaded');

          // Define custom blocks
          defineCustomBlocks(Blockly);

          // Initialize Blockly workspace
          try {
            workspace = Blockly.inject('blocklyDiv', {
              toolbox: document.getElementById('toolbox'),
              scrollbars: true,
              trashcan: true,
            });
            console.log('Blockly workspace initialized');
          } catch (error) {
            console.error('Error initializing Blockly:', error);
            alert('Failed to initialize Blockly. Please check your setup.');
          }
        });
      });
    });
  });

  function generateCode() {
    if (workspace) {
      const code = Blockly.Python.workspaceToCode(workspace);
      console.log(code);
      alert(code);
      return code;
    } else {
      console.error('Workspace is not initialized yet.');
      alert('Workspace is not ready. Please try again later.');
    }
  }
</script>

<!-- Blockly workspace container -->
<div id="blocklyDiv" style="height: 480px; width: 100%;"></div>

<!-- Toolbox XML configuration -->
<xml id="toolbox" style="display: none">
  <block type="controls_if"></block>
  <block type="logic_compare"></block>
  <block type="logic_boolean"></block>
</xml>

<!-- Button to generate Python code -->
<button on:click={generateCode}>Generate Python Code</button>
