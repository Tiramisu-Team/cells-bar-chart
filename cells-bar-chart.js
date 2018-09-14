class CellsBarChart extends Polymer.Element {

  static get is() {
    return 'cells-bar-chart';
  }

  static get properties() {
    return {
      data: {
        type: Array,
        value: [{
          "name": "Chrome",
          "data": [62.74,5]
      },
      {
          "name": "Firefox",
          "data": [70,5]
          
      }]
      }
    };
  }
}

customElements.define(CellsBarChart.is, CellsBarChart);