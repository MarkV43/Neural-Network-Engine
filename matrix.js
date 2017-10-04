function Matrix(rows, cols) {
	this.rows = rows;
	this.cols = cols;
	this.values = [];

	for(var i = 0; i < this.rows; i++) {
		this.values[i] = [];
		for(var j = 0; j < this.cols; j++) {
			this.values[i][j] = 0;
		}
	}
}

Matrix.prototype.mult = function(n) {
	for (var i = 0; i < this.rows; i++)	{
		for (var j = 0; j < this.cols; j++) {
			this.values[i][j] *= n;
		}
	}
};

Matrix.prototype.add = function(n) {
	for (var i = 0; i < this.rows; i++)	{
		for (var j = 0; j < this.cols; j++) {
			this.values[i][j] += n;
		}
	}
};