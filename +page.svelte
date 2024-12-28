<script>
  import Blockly from './blockly.svelte'; // Ensure the correct relative path is used
</script>

<main>
  <h1>Blockly Integration</h1>
  <Blockly /> <!-- This will render the Blockly component -->
</main>

<style>
  main {
    text-align: center;
    padding: 20px;
  }

  h1 {
    font-size: 2rem;
    color: #333;
  }
</style>
