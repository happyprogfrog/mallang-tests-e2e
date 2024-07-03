$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/multiplication.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# language: ko"
    }
  ],
  "line": 2,
  "name": "사용자는 정답일 수도 있고 오답일 수도 있는 곱셈 답안을 제출할 수 있다.",
  "description": "사용자가 정답을 제출하면 결과가 정답임을 나타내는 응답을 받는다.\n또한 점수를 받고 몇 가지 배지도 받을 수 있다.\n따라서 재접속하고 계속 플레이할 수 있도록 동기부여가 된다.\n배지는 첫 번째 정답을 맞출 때, 사용자가 100점, 500점, 999점을 획득할 때 각각 획득할 수 있다.\n사용자가 오답을 제출하면 점수와 배지 모두 얻을 수 없다.",
  "id": "사용자는-정답일-수도-있고-오답일-수도-있는-곱셈-답안을-제출할-수-있다.",
  "keyword": "기능"
});
formatter.before({
  "duration": 32667500,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "사용자가 첫 번째 정답 답안을 제출하고 배지를 얻는다",
  "description": "",
  "id": "사용자는-정답일-수도-있고-오답일-수도-있는-곱셈-답안을-제출할-수-있다.;사용자가-첫-번째-정답-답안을-제출하고-배지를-얻는다",
  "type": "scenario",
  "keyword": "시나리오"
});
formatter.step({
  "line": 10,
  "name": "사용자 철수가 1개의 정답 답안을 제출한다",
  "keyword": "만약"
});
formatter.step({
  "line": 11,
  "name": "사용자는 답안이 정답이라는 응답을 받는다",
  "keyword": "그러면"
});
formatter.step({
  "line": 12,
  "name": "사용자는 10점을 얻는다",
  "keyword": "그리고"
});
formatter.step({
  "line": 13,
  "name": "사용자는 FIRST_WON 배지를 얻는다",
  "keyword": "그리고"
});
formatter.match({
  "arguments": [
    {
      "val": "철수",
      "offset": 4
    },
    {
      "val": "1",
      "offset": 8
    },
    {
      "val": "정답",
      "offset": 12
    }
  ],
  "location": "MultiplicationFeatureSteps.사용자가_정답을_제출한다(String,int,String)"
});
formatter.result({
  "duration": 9615416,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "정답",
      "offset": 9
    }
  ],
  "location": "MultiplicationFeatureSteps.사용자는_응답을_받는다(String)"
});
formatter.result({
  "duration": 878125,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 5
    }
  ],
  "location": "MultiplicationFeatureSteps.사용자는_점수를_얻는다(int)"
});
formatter.result({
  "duration": 2072816708,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "FIRST_WON",
      "offset": 5
    }
  ],
  "location": "MultiplicationFeatureSteps.사용자는_배지를_얻는다(String)"
});
formatter.result({
  "duration": 237257833,
  "status": "passed"
});
formatter.before({
  "duration": 40789458,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "사용자는 두 번째 정답 답안을 제출하고 포인트만 얻는다",
  "description": "",
  "id": "사용자는-정답일-수도-있고-오답일-수도-있는-곱셈-답안을-제출할-수-있다.;사용자는-두-번째-정답-답안을-제출하고-포인트만-얻는다",
  "type": "scenario",
  "keyword": "시나리오"
});
formatter.step({
  "line": 16,
  "name": "사용자 철수가 1개의 정답 답안을 제출한다",
  "keyword": "먼저"
});
formatter.step({
  "line": 17,
  "name": "사용자는 FIRST_WON 배지를 얻는다",
  "keyword": "그리고"
});
formatter.step({
  "line": 18,
  "name": "사용자 철수가 1개의 정답 답안을 제출한다",
  "keyword": "만약"
});
formatter.step({
  "line": 19,
  "name": "사용자는 답안이 정답이라는 응답을 받는다",
  "keyword": "그러면"
});
formatter.step({
  "line": 20,
  "name": "사용자는 10점을 얻는다",
  "keyword": "그리고"
});
formatter.step({
  "line": 21,
  "name": "사용자는 배지를 얻지 못한다",
  "keyword": "그리고"
});
formatter.match({
  "arguments": [
    {
      "val": "철수",
      "offset": 4
    },
    {
      "val": "1",
      "offset": 8
    },
    {
      "val": "정답",
      "offset": 12
    }
  ],
  "location": "MultiplicationFeatureSteps.사용자가_정답을_제출한다(String,int,String)"
});
formatter.result({
  "duration": 13286875,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "FIRST_WON",
      "offset": 5
    }
  ],
  "location": "MultiplicationFeatureSteps.사용자는_배지를_얻는다(String)"
});
formatter.result({
  "duration": 214948167,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "철수",
      "offset": 4
    },
    {
      "val": "1",
      "offset": 8
    },
    {
      "val": "정답",
      "offset": 12
    }
  ],
  "location": "MultiplicationFeatureSteps.사용자가_정답을_제출한다(String,int,String)"
});
formatter.result({
  "duration": 11100000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "정답",
      "offset": 9
    }
  ],
  "location": "MultiplicationFeatureSteps.사용자는_응답을_받는다(String)"
});
formatter.result({
  "duration": 99917,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 5
    }
  ],
  "location": "MultiplicationFeatureSteps.사용자는_점수를_얻는다(int)"
});
formatter.result({
  "duration": 2053055334,
  "status": "passed"
});
formatter.match({
  "location": "MultiplicationFeatureSteps.사용자는_배지를_얻지_못한다()"
});
formatter.result({
  "duration": 62580500,
  "status": "passed"
});
formatter.before({
  "duration": 101167375,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "사용자는 오답 답안을 제출하고 아무것도 얻지 못한다",
  "description": "",
  "id": "사용자는-정답일-수도-있고-오답일-수도-있는-곱셈-답안을-제출할-수-있다.;사용자는-오답-답안을-제출하고-아무것도-얻지-못한다",
  "type": "scenario",
  "keyword": "시나리오"
});
formatter.step({
  "line": 24,
  "name": "사용자 철수가 1개의 오답 답안을 제출한다",
  "keyword": "만약"
});
formatter.step({
  "line": 25,
  "name": "사용자는 답안이 오답이라는 응답을 받는다",
  "keyword": "그러면"
});
formatter.step({
  "line": 26,
  "name": "사용자는 0점을 얻는다",
  "keyword": "그리고"
});
formatter.step({
  "line": 27,
  "name": "사용자는 배지를 얻지 못한다",
  "keyword": "그리고"
});
formatter.match({
  "arguments": [
    {
      "val": "철수",
      "offset": 4
    },
    {
      "val": "1",
      "offset": 8
    },
    {
      "val": "오답",
      "offset": 12
    }
  ],
  "location": "MultiplicationFeatureSteps.사용자가_정답을_제출한다(String,int,String)"
});
formatter.result({
  "duration": 23398417,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "오답",
      "offset": 9
    }
  ],
  "location": "MultiplicationFeatureSteps.사용자는_응답을_받는다(String)"
});
formatter.result({
  "duration": 232000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 5
    }
  ],
  "location": "MultiplicationFeatureSteps.사용자는_점수를_얻는다(int)"
});
formatter.result({
  "duration": 2060394500,
  "status": "passed"
});
formatter.match({
  "location": "MultiplicationFeatureSteps.사용자는_배지를_얻지_못한다()"
});
formatter.result({
  "duration": 13197000,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 29,
      "value": "# 브론즈, 실버, 골드 배지 확인"
    }
  ],
  "line": 30,
  "name": "\u003c이전_답안\u003e 정답을 제출한 이후에 사용자가 1개의 정답을 제출하고 \u003c배지_이름\u003e 배지를 얻는다.",
  "description": "",
  "id": "사용자는-정답일-수도-있고-오답일-수도-있는-곱셈-답안을-제출할-수-있다.;\u003c이전-답안\u003e-정답을-제출한-이후에-사용자가-1개의-정답을-제출하고-\u003c배지-이름\u003e-배지를-얻는다.",
  "type": "scenario_outline",
  "keyword": "시나리오 개요"
});
formatter.step({
  "line": 31,
  "name": "사용자 철수가 \u003c이전_답안\u003e개의 정답 답안을 제출한다",
  "keyword": "먼저"
});
formatter.step({
  "line": 32,
  "name": "사용자 철수가 1개의 정답 답안을 제출한다",
  "keyword": "만약"
});
formatter.step({
  "line": 33,
  "name": "사용자는 답안이 정답이라는 응답을 받는다",
  "keyword": "그러면"
});
formatter.step({
  "line": 34,
  "name": "사용자는 10점을 얻는다",
  "keyword": "그리고"
});
formatter.step({
  "line": 35,
  "name": "사용자는 \u003c배지_이름\u003e 배지를 얻는다",
  "keyword": "그리고"
});
formatter.examples({
  "line": 37,
  "name": "",
  "description": "",
  "id": "사용자는-정답일-수도-있고-오답일-수도-있는-곱셈-답안을-제출할-수-있다.;\u003c이전-답안\u003e-정답을-제출한-이후에-사용자가-1개의-정답을-제출하고-\u003c배지-이름\u003e-배지를-얻는다.;",
  "rows": [
    {
      "cells": [
        "이전_답안",
        "배지_이름"
      ],
      "line": 38,
      "id": "사용자는-정답일-수도-있고-오답일-수도-있는-곱셈-답안을-제출할-수-있다.;\u003c이전-답안\u003e-정답을-제출한-이후에-사용자가-1개의-정답을-제출하고-\u003c배지-이름\u003e-배지를-얻는다.;;1"
    },
    {
      "cells": [
        "9",
        "BRONZE_MULTIPLICATOR"
      ],
      "line": 39,
      "id": "사용자는-정답일-수도-있고-오답일-수도-있는-곱셈-답안을-제출할-수-있다.;\u003c이전-답안\u003e-정답을-제출한-이후에-사용자가-1개의-정답을-제출하고-\u003c배지-이름\u003e-배지를-얻는다.;;2"
    },
    {
      "cells": [
        "49",
        "SILVER_MULTIPLICATOR"
      ],
      "line": 40,
      "id": "사용자는-정답일-수도-있고-오답일-수도-있는-곱셈-답안을-제출할-수-있다.;\u003c이전-답안\u003e-정답을-제출한-이후에-사용자가-1개의-정답을-제출하고-\u003c배지-이름\u003e-배지를-얻는다.;;3"
    },
    {
      "cells": [
        "99",
        "GOLD_MULTIPLICATOR"
      ],
      "line": 41,
      "id": "사용자는-정답일-수도-있고-오답일-수도-있는-곱셈-답안을-제출할-수-있다.;\u003c이전-답안\u003e-정답을-제출한-이후에-사용자가-1개의-정답을-제출하고-\u003c배지-이름\u003e-배지를-얻는다.;;4"
    }
  ],
  "keyword": "예"
});
formatter.before({
  "duration": 36999625,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "9 정답을 제출한 이후에 사용자가 1개의 정답을 제출하고 BRONZE_MULTIPLICATOR 배지를 얻는다.",
  "description": "",
  "id": "사용자는-정답일-수도-있고-오답일-수도-있는-곱셈-답안을-제출할-수-있다.;\u003c이전-답안\u003e-정답을-제출한-이후에-사용자가-1개의-정답을-제출하고-\u003c배지-이름\u003e-배지를-얻는다.;;2",
  "type": "scenario",
  "keyword": "시나리오 개요"
});
formatter.step({
  "line": 31,
  "name": "사용자 철수가 9개의 정답 답안을 제출한다",
  "matchedColumns": [
    0
  ],
  "keyword": "먼저"
});
formatter.step({
  "line": 32,
  "name": "사용자 철수가 1개의 정답 답안을 제출한다",
  "keyword": "만약"
});
formatter.step({
  "line": 33,
  "name": "사용자는 답안이 정답이라는 응답을 받는다",
  "keyword": "그러면"
});
formatter.step({
  "line": 34,
  "name": "사용자는 10점을 얻는다",
  "keyword": "그리고"
});
formatter.step({
  "line": 35,
  "name": "사용자는 BRONZE_MULTIPLICATOR 배지를 얻는다",
  "matchedColumns": [
    1
  ],
  "keyword": "그리고"
});
formatter.match({
  "arguments": [
    {
      "val": "철수",
      "offset": 4
    },
    {
      "val": "9",
      "offset": 8
    },
    {
      "val": "정답",
      "offset": 12
    }
  ],
  "location": "MultiplicationFeatureSteps.사용자가_정답을_제출한다(String,int,String)"
});
formatter.result({
  "duration": 99074250,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "철수",
      "offset": 4
    },
    {
      "val": "1",
      "offset": 8
    },
    {
      "val": "정답",
      "offset": 12
    }
  ],
  "location": "MultiplicationFeatureSteps.사용자가_정답을_제출한다(String,int,String)"
});
formatter.result({
  "duration": 10194709,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "정답",
      "offset": 9
    }
  ],
  "location": "MultiplicationFeatureSteps.사용자는_응답을_받는다(String)"
});
formatter.result({
  "duration": 112708,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 5
    }
  ],
  "location": "MultiplicationFeatureSteps.사용자는_점수를_얻는다(int)"
});
formatter.result({
  "duration": 2026295666,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BRONZE_MULTIPLICATOR",
      "offset": 5
    }
  ],
  "location": "MultiplicationFeatureSteps.사용자는_배지를_얻는다(String)"
});
formatter.result({
  "duration": 225125833,
  "status": "passed"
});
formatter.before({
  "duration": 32809875,
  "status": "passed"
});
formatter.scenario({
  "line": 40,
  "name": "49 정답을 제출한 이후에 사용자가 1개의 정답을 제출하고 SILVER_MULTIPLICATOR 배지를 얻는다.",
  "description": "",
  "id": "사용자는-정답일-수도-있고-오답일-수도-있는-곱셈-답안을-제출할-수-있다.;\u003c이전-답안\u003e-정답을-제출한-이후에-사용자가-1개의-정답을-제출하고-\u003c배지-이름\u003e-배지를-얻는다.;;3",
  "type": "scenario",
  "keyword": "시나리오 개요"
});
formatter.step({
  "line": 31,
  "name": "사용자 철수가 49개의 정답 답안을 제출한다",
  "matchedColumns": [
    0
  ],
  "keyword": "먼저"
});
formatter.step({
  "line": 32,
  "name": "사용자 철수가 1개의 정답 답안을 제출한다",
  "keyword": "만약"
});
formatter.step({
  "line": 33,
  "name": "사용자는 답안이 정답이라는 응답을 받는다",
  "keyword": "그러면"
});
formatter.step({
  "line": 34,
  "name": "사용자는 10점을 얻는다",
  "keyword": "그리고"
});
formatter.step({
  "line": 35,
  "name": "사용자는 SILVER_MULTIPLICATOR 배지를 얻는다",
  "matchedColumns": [
    1
  ],
  "keyword": "그리고"
});
formatter.match({
  "arguments": [
    {
      "val": "철수",
      "offset": 4
    },
    {
      "val": "49",
      "offset": 8
    },
    {
      "val": "정답",
      "offset": 13
    }
  ],
  "location": "MultiplicationFeatureSteps.사용자가_정답을_제출한다(String,int,String)"
});
formatter.result({
  "duration": 482429208,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "철수",
      "offset": 4
    },
    {
      "val": "1",
      "offset": 8
    },
    {
      "val": "정답",
      "offset": 12
    }
  ],
  "location": "MultiplicationFeatureSteps.사용자가_정답을_제출한다(String,int,String)"
});
formatter.result({
  "duration": 18158375,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "정답",
      "offset": 9
    }
  ],
  "location": "MultiplicationFeatureSteps.사용자는_응답을_받는다(String)"
});
formatter.result({
  "duration": 92750,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 5
    }
  ],
  "location": "MultiplicationFeatureSteps.사용자는_점수를_얻는다(int)"
});
formatter.result({
  "duration": 2036272875,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SILVER_MULTIPLICATOR",
      "offset": 5
    }
  ],
  "location": "MultiplicationFeatureSteps.사용자는_배지를_얻는다(String)"
});
formatter.result({
  "duration": 213051375,
  "status": "passed"
});
formatter.before({
  "duration": 75964584,
  "status": "passed"
});
formatter.scenario({
  "line": 41,
  "name": "99 정답을 제출한 이후에 사용자가 1개의 정답을 제출하고 GOLD_MULTIPLICATOR 배지를 얻는다.",
  "description": "",
  "id": "사용자는-정답일-수도-있고-오답일-수도-있는-곱셈-답안을-제출할-수-있다.;\u003c이전-답안\u003e-정답을-제출한-이후에-사용자가-1개의-정답을-제출하고-\u003c배지-이름\u003e-배지를-얻는다.;;4",
  "type": "scenario",
  "keyword": "시나리오 개요"
});
formatter.step({
  "line": 31,
  "name": "사용자 철수가 99개의 정답 답안을 제출한다",
  "matchedColumns": [
    0
  ],
  "keyword": "먼저"
});
formatter.step({
  "line": 32,
  "name": "사용자 철수가 1개의 정답 답안을 제출한다",
  "keyword": "만약"
});
formatter.step({
  "line": 33,
  "name": "사용자는 답안이 정답이라는 응답을 받는다",
  "keyword": "그러면"
});
formatter.step({
  "line": 34,
  "name": "사용자는 10점을 얻는다",
  "keyword": "그리고"
});
formatter.step({
  "line": 35,
  "name": "사용자는 GOLD_MULTIPLICATOR 배지를 얻는다",
  "matchedColumns": [
    1
  ],
  "keyword": "그리고"
});
formatter.match({
  "arguments": [
    {
      "val": "철수",
      "offset": 4
    },
    {
      "val": "99",
      "offset": 8
    },
    {
      "val": "정답",
      "offset": 13
    }
  ],
  "location": "MultiplicationFeatureSteps.사용자가_정답을_제출한다(String,int,String)"
});
formatter.result({
  "duration": 1118409500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "철수",
      "offset": 4
    },
    {
      "val": "1",
      "offset": 8
    },
    {
      "val": "정답",
      "offset": 12
    }
  ],
  "location": "MultiplicationFeatureSteps.사용자가_정답을_제출한다(String,int,String)"
});
formatter.result({
  "duration": 12557750,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "정답",
      "offset": 9
    }
  ],
  "location": "MultiplicationFeatureSteps.사용자는_응답을_받는다(String)"
});
formatter.result({
  "duration": 132375,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 5
    }
  ],
  "location": "MultiplicationFeatureSteps.사용자는_점수를_얻는다(int)"
});
formatter.result({
  "duration": 2036183542,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "GOLD_MULTIPLICATOR",
      "offset": 5
    }
  ],
  "location": "MultiplicationFeatureSteps.사용자는_배지를_얻는다(String)"
});
formatter.result({
  "duration": 218339208,
  "status": "passed"
});
});