import datetime
from detection import Scanner
from detection.db import DB
import os
from detection import FileManager, FileCache
from detection import PatternChecker
from detection.honeypots.patterns import InlineStylePatterns

start = datetime.datetime.now()


def analyseFile(src):
        print ('\n######################################## %s' % src)
        scanner = Scanner.Scanner(None, 3)
        result = FileManager.downloadFile(src)

        if result == None:
            return

        scanner.analyseCode(result[0], result[1], result[2])
        db = DB.DB('~/OpenWPM/data', scanner.scripts)
        db.printScripts()

#analyseFile('file:detection/examples/inlineScript9.js')


for subdir, dirs, files in os.walk('detection/examples/test'):
    for file in files:
#        if file.startswith('pubads_impl'):
            filepath = 'file:' + subdir + os.sep + file
            analyseFile(filepath)

#s
#file = open(os.path.join('detection/tests/honeypots','index.html'))
#data = file.read()
#
#inlineStylePatterns = InlineStylePatterns.InlineStylePatterns()
#
#for pattern in inlineStylePatterns.patterns:
#    for patternValue in pattern[2]:
#        PatternChecker.checkPattern(data, patternValue, 'SCANlocal')
#print "@@@@@@@@@@@@@@@@Inline patterns @@@@@@@@@@@@@@@@@@@@@@@@@@"
#for parentPat in inlineStylePatterns.parentPatterns:
#    for patternPatValue in parentPat[2]:
#        if PatternChecker.checkPattern(data, patternPatValue, 'SCANlocalParent'):
#            print "yes %s" % parentPat[1]

end = datetime.datetime.now()



delta = end - start
datetime.timedelta(0, 8, 562000)
delta2 = divmod(delta.days * 86400 + delta.seconds, 60)
print ("Min. Sec. %s %s" % (delta2[0], delta2[1]))