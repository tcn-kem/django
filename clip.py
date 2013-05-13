import clips,readfile,sys
rules = [rule.strip() for rule in readfile.readfile(sys.argv[1])]
provinces = [province.strip() for province in readfile.readfile(sys.argv[2])]

for province in provinces:
	clips.SendCommand(province)

clips.Assert("(province Bangkok)")

clips.Run()

for rule in rules:
	clips.SendCommand(rule)

clips.Assert("(kind round shaped rice)")
print "condition : "
clips.PrintFacts()

#BEFORE
bf = len(clips.FactList())

#RUN
clips.Run()

#AFTER
af = len(clips.FactList())

for i in range(af - (af - bf)):
	#print "retract Fact",i
	clips.FactList()[0].Retract()

#print "FACTS :"
#clips.PrintFacts()

#print "RULES :"
#clips.PrintRules()

print "\n".join([i.PPForm()[8+6:-1] for i in clips.FactList()])     
