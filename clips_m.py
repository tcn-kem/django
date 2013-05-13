import clips,readfile
def myclip(_province,_kind,_terrain):
	clips.Reset()
	rules = [rule.strip() for rule in readfile.readfile('rules.txt')]
	provinces = [province.strip() for province in readfile.readfile('province.txt')]

	for province in provinces:
		clips.SendCommand(province.strip())
	
	
	clips.Assert("(province {0})".format(_province))
	clips.Run()
	
	for rule in rules:
		clips.SendCommand(rule.strip())

	clips.Assert("(kind {0})".format(_kind))
	if _terrain is not "":
		clips.FactList()[3].Retract()
		clips.Assert("(terrain {0})".format(_terrain))
	#BEFORE
	bf = len(clips.FactList())

	#RUN
	clips.Run()

	#AFTER
	af = len(clips.FactList())

	for i in range(af - (af - bf)):
		clips.FactList()[0].Retract()
	#clips.PrintRules()
	return [i.PPForm()[8+6:-1] for i in clips.FactList()]     
