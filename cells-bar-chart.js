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
    this.set('_categories', det.categories);
    this.set('_data', det.data);
  }

  _compute_x_Axis(_categories) {
    return {categories: _categories, crosshair: true};
  }

  
}

customElements.define(CellsBarChart.is, CellsBarChart);