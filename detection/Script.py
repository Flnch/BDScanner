import DetectionPattern, ScoreCalculator

class Script:

    def __init__(self, id, data):
        self.identifier = id
        self.detectionPatterns = {}
        self.companyPatterns = []
        self.URL = ''
        self.score = 0
        self.detectionPatternHash = 0
        self.companyPatternHash = 0
        self.fromCache = False
        self.hash = None
        self.data = data

    def addCompanyPattern(self, companyPattern):
        if companyPattern not in self.companyPatterns:
            self.companyPatterns.append(companyPattern[0])
            self.companyPatternHash = self.companyPatternHash + hash(companyPattern[0]);

    def addDetectionPattern(self, topic, searchPattern, score):

        if topic in self.detectionPatterns:
            detectionPattern = self.detectionPatterns[topic];
            detectionPattern.score = detectionPattern.score + score;
            detectionPattern.patterns.append(searchPattern)
            self.detectionPatterns[topic] = detectionPattern
        else:
            self.detectionPatterns[topic] = DetectionPattern.DetectionPattern(score, searchPattern)

    def validateKeyPresence(self, detectionKeys):
        present = False
        for detectionKey in detectionKeys:
            if detectionKey in self.detectionPatterns.keys():
                return True


    def calculateScore(self):
        userAgentKey = self.validateKeyPresence(['General_UserAgent', 'General_UserAgentElectron']) #OR construction

        for key, detectionPattern in self.detectionPatterns.iteritems():
            validated = True
            if key in ScoreCalculator.preConditions:
                validated = self.validateKeyPresence(ScoreCalculator.preConditions[key])

            if validated:
                amountOfPatterns = len(self.detectionPatterns[key].patterns)

                score = ScoreCalculator.getScore(key, amountOfPatterns, userAgentKey, detectionPattern)
                self.score = self.score + score

            self.detectionPatternHash = self.detectionPatternHash + detectionPattern.hash

    def __hash__(self):
            if not self.hash:
                self.hash = hash((self.score, len(self.data), self.detectionPatternHash, self.companyPatternHash))
            return self.hash
