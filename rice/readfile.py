def readfile(filename):
	with open(filename,'r') as files:
		return files.readlines()

def csv(filename):
	lst = []
	for data in readfile(filename):
		lst += data.strip().split(',')
	return lst
