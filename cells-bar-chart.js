class CellsBarChart extends Polymer.Element {

  static get is() {
    return 'cells-bar-chart';
  }

  static get properties() {
    return {
      detail: {
        type: Object,
        observer: '_parseDetail'
      },
      _data: {
        type: Array,
        value: []
      },
      _categories: {
        type: Array
      },
      _xAxis: {
        type: Object,
        computed: '_compute_x_Axis(_categories)',
      },
      yLabel: {
        type: String
      },
      subtitle: {
        type: String
      },
      title: {
        type: String
      },
      xLabel: {
        type: String
      },
      label: {
        type: String
      }
    };
  }

  _parseDetail(det) {
    this.set('_categories', det.categories ? det.categories : ["ene. 18","feb. 18","ago. 17","oct. 17","nov. 17","mar. 18","sep. 17","dic. 17","jun. 18","abr. 18","may. 18","jul. 18"]);
    this.set('_data', det.data ? det.data : {"name":"Cashflow","data":[14165.96,22970.96,20610.33,53047.799999999996,36796.43,30216.94,39390.69999999999,20765.949999999997,19106.29,16814.800000000003,7881.86,19482.54]});
  }

  _compute_x_Axis(_categories) {
    return {categories: _categories, crosshair: true};
  }

  
}

customElements.define(CellsBarChart.is, CellsBarChart);