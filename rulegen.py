import sys,readfile
class rule(object):
	def __init__(self,name,kind,terrain,area,count):
		self.name = name
		self.terrain = terrain
		self.area = area
		self.kind = kind
		self.count = count
	def getrule(self):
		return "(defrule {0}.{4} \"{0}\" (kind {1}) (terrain {2}) (area {3}) => (assert (rice {0})))\n".format(self.name,self.kind,self.terrain,self.area,self.count)

data = [i.strip() for i in readfile.readfile(sys.argv[2])]
lst = []
for i in data:
	x = i.split(",")
	lst.append([x[0],x[1],x[3],x[4]])
print lst
for i in lst:
	with open(sys.argv[1],"a") as data:
		name = i[0]
		kind = i[1]
		area = i[2]
		terrain	= i[3]
		count = 0
		for k in area.split("/"):
			for j in terrain.split("/"):
				tmp_rule = rule(name,kind,j.lower(),k.title(),count)
				count+=1
				print tmp_rule.getrule()
				data.write(tmp_rule.getrule())
	
"""
state = "y"
while state == "y":
	with open(sys.argv[1],"a") as data:
		name = raw_input("rulename	: ")
		kind = raw_input("kind      : ")
		area = raw_input("area		: ")
		terrain	= raw_input("terrain    : ")
		for i in area.split(","):
			for j in terrain.split(","):
				tmp_rule = rule(name,kind,j.lower(),i.title())
				print tmp_rule.getrule()
				data.write(tmp_rule.getrule())
	state = raw_input("continue (y/n) ? ").lower()
"""		
