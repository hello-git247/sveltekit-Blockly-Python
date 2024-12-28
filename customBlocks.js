export function defineCustomBlocks(Blockly) {
  // Define "controls_if" block only if it is not already defined
  if (!Blockly.Blocks['controls_if']) {
    Blockly.defineBlocksWithJsonArray([
      {
        "type": "controls_if",
        "message0": "if %1 then %2",
        "args0": [
          {
            "type": "input_value",
            "name": "CONDITION"
          },
          {
            "type": "input_statement",
            "name": "DO"
          }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 230
      },
      // Add other custom blocks here
    ]);
    console.log('Custom block "controls_if" defined successfully.');
  } else {
    console.warn('Block "controls_if" is already defined. Skipping redefinition.');
  }

  // Define another custom block if needed
  if (!Blockly.Blocks['custom_block']) {
    Blockly.Blocks['custom_block'] = {
      init: function () {
        this.appendDummyInput().appendField('Custom Block');
        this.setOutput(true, 'Boolean');
        this.setColour(120);
        this.setTooltip('This is a custom block.');
        this.setHelpUrl('');
      },
    };
    console.log('Custom block "custom_block" defined successfully.');
  } else {
    console.warn('Block "custom_block" is already defined. Skipping redefinition.');
  }
}
