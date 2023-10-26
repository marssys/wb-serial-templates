defineVirtualDevice("princ_gas_meter", { 
    title: "Princ Gas Meter Volume",
    cells: {
      volume: {
        title: "Volume, m3",
        type: "value",
        value: 0,
      }
    }
  });
  
  // Change address princ_gas_meter_* if need!!!
  
  defineRule("volumeCalculate", {
    whenChanged: "princ_gas_meter_1/volume_f",
    then: function (newValue, devName, cellName) {
      dev["princ_gas_meter"]["volume"] = dev["princ_gas_meter_1"]["volume_i"] + dev["princ_gas_meter_1"]["volume_f"] * 0.000000001;
    }
  });
  