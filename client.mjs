import child_process from 'child_process';

child_process.exec(
    "py PieChartGenerator.py Food,300 Entertainment,400 Other,100 Transportation,300 Lodging,200"
);