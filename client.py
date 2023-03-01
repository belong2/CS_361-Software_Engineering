import os

print(os.popen("py PieChartGenerator.py Food,300 Entertainment,400 Other,100 Transportation,300").read())