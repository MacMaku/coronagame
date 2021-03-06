import { ICharacterData, SingleStep, MultiSteps } from '../models';
import { DialogService, DataService } from '../services';
import {combineActionsIntoScenerio} from "../utils";

export const NPC_DATA: ICharacterData[] = [
    {
        sprite: 'fox',
        immuneToVirus: true,
        startX: 10.5,
        startY: 6.5,
        id: 1,
        waypoints: new MultiSteps(
            [
                new SingleStep(-4, 11),
                new SingleStep(8, 11),
                new SingleStep(8, 6),
                new SingleStep(-4, 6),
                new SingleStep(-4, 11)
            ],
            true
        ),
        action: () => {
        },
        idleAction: combineActionsIntoScenerio([
            {delay: 1000, action: () => DataService.getInstance().findNpcById(1).saySentance('Whoof!')},
            {delay: 1000, action: () => DataService.getInstance().findNpcById(1).saySentance('Whoof, woof!')},
        ]),
    },
    {
        sprite: 'npc_3',
        startX: 20.5,
        startY: 6.5,
        id: 2,
        waypoints: null,
        action: () => {
        },
        messages: [{ cooldown: 7000, message: '♩ Lalalala ♩' }]
    },
    {
        sprite: 'npc_11',
        startX: 10.5,
        startY: 6.5,
        id: 3,
        waypoints: new MultiSteps(
            [
                new SingleStep(69, 13),
                new SingleStep(69, 16),
                new SingleStep(79, 16),
                new SingleStep(79, 13),
                new SingleStep(69, 13)
            ],
            true
        ),
        action: () => {
            DataService.getInstance()
                .findNpcById(3)
                .displayEmotion('love');
        },
        idleAction: () => console.log('npc_13 is near!')
    },
    {
        sprite: 'npc_4',
        startX: 10.5,
        startY: 6.5,
        id: 4,
        waypoints: new MultiSteps([new SingleStep(26, 18)], false, true),
        action: () => {
            DataService.getInstance()
                .findNpcById(4)
                .displayEmotion('love2');
        },
        messages: [{ cooldown: 7000, message: 'And she told me...' }]
    },
    {
        sprite: 'npc_12',
        startX: 10.5,
        startY: 6.5,
        id: 5,
        waypoints: new MultiSteps(
            [new SingleStep(2, 25), new SingleStep(4, 25)],
            false,
            true
        ),
        action: () => {
            DataService.getInstance()
                .findNpcById(5)
                .displayEmotion('cringe');
        },
        idleAction: combineActionsIntoScenerio([
            {delay: 1000, action: () => DataService.getInstance().findNpcById(5).move()},
            {delay: 1000, action: () => DataService.getInstance().findNpcById(5).saySentance('Nie zbliżaj się typie!')},
            {delay: 3000, action: () => DataService.getInstance().findNpcById(5).saySentance('Dobra przecież nie ma co też spinać xD!')}
        ]),
    },
    {
        sprite: 'npc_2',
        startX: 10.5,
        startY: 6.5,
        id: 6,
        waypoints: new MultiSteps(
            [new SingleStep(8, 25), new SingleStep(6, 25)],
            false,
            true
        ),
        action: () => {},
    },
    {
        sprite: 'npc_12',
        startX: 10.5,
        startY: 6.5,
        id: 7,
        waypoints: new MultiSteps([new SingleStep(37, 28)], false, true),
        action: () => {
            DataService.getInstance()
                .findNpcById(7)
                .displayEmotion('haha');
        }
    },
    {
        sprite: 'npc_4',
        startX: 10.5,
        startY: 6.5,
        id: 8,
        waypoints: new MultiSteps([new SingleStep(35, 28)], false, true),
        action: () => {},
        messages: [{ cooldown: 7000, message: 'My husband thinks differently!' }]
    },
    {
        sprite: 'npc_5',
        startX: 10.5,
        startY: 6.5,
        id: 9,
        waypoints: new MultiSteps([new SingleStep(39, 28)], false, true),
        action: () => {
            DataService.getInstance()
                .findNpcById(9)
                .displayEmotion('haha');
        }
    },
    {
        sprite: 'npc_2',
        startX: 10.5,
        startY: 6.5,
        id: 10,
        waypoints: new MultiSteps(
            [
                new SingleStep(46, 11),
                new SingleStep(74, 11),
                new SingleStep(74, 6),
                new SingleStep(46, 6),
                new SingleStep(46, 11)
            ],
            true
        ),
        action: () => {
            DataService.getInstance()
                .findNpcById(10)
                .displayEmotion('wow');
        }
    },
    {
        sprite: 'npc_4',
        startX: 10.5,
        startY: 6.5,
        id: 11,
        waypoints: new MultiSteps(
            [
                new SingleStep(86, 6),
                new SingleStep(190, 6),
                new SingleStep(190, 5),
                new SingleStep(86, 5),
                new SingleStep(86, 6)
            ],
            true
        ),
        action: () => {
            DataService.getInstance()
                .findNpcById(11)
                .displayEmotion('wow');
        },
        messages: [{ cooldown: 2500, message: 'And in Italy, apparently...' }]
    },
    {
        sprite: 'npc_6',
        startX: 10.5,
        startY: 6.5,
        id: 12,
        constantSpeed: true,
        waypoints: new MultiSteps(
            [
                new SingleStep(173, 24),
                new SingleStep(173, 53),
                new SingleStep(180, 53),
                new SingleStep(180, 24),
                new SingleStep(173, 24)
            ],
            true
        ),
        action: () => {
            DataService.getInstance()
                .findNpcById(12)
                .displayEmotion('what');
        }
    },
    {
        sprite: 'npc_1',
        startX: 10.5,
        startY: 6.5,
        id: 13,
        constantSpeed: true,
        waypoints: new MultiSteps(
            [
                new SingleStep(174, 24),
                new SingleStep(174, 52),
                new SingleStep(181, 52),
                new SingleStep(181, 24),
                new SingleStep(174, 24)
            ],
            true
        ),
        action: () => {
            DataService.getInstance()
                .findNpcById(13)
                .displayEmotion('what');
        },
        messages: [{ cooldown: 7000, message: 'Look at my new IPhone XIII!' }]
    },
    {
        sprite: 'npc_7',
        startX: 10.5,
        startY: 6.5,
        id: 14,
        waypoints: new MultiSteps(
            [
                new SingleStep(82, 24),
                new SingleStep(90, 24),
                new SingleStep(90, 21),
                new SingleStep(82, 21),
                new SingleStep(82, 19),
                new SingleStep(90, 19),
                new SingleStep(90, 24),
                new SingleStep(82, 24)
            ],
            true
        ),
        action: () => {
            DataService.getInstance()
                .findNpcById(14)
                .displayEmotion('idk');
        }
    },
    {
        sprite: 'npc_8',
        startX: 10.5,
        startY: 6.5,
        id: 15,
        waypoints: new MultiSteps([new SingleStep(118, 17)], false, true),
        action: () => {
            DataService.getInstance()
                .findNpcById(15)
                .displayEmotion('idk');
        }
    },
    {
        sprite: 'npc_9',
        startX: 10.5,
        startY: 6.5,
        id: 16,
        waypoints: new MultiSteps([new SingleStep(114, 17)], false, true),
        action: () => {
            DataService.getInstance()
                .findNpcById(16)
                .displayEmotion('yes');
        }
    },
    {
        sprite: 'npc_10',
        startX: 10.5,
        startY: 6.5,
        id: 17,
        waypoints: new MultiSteps(
            [
                new SingleStep(122, 17),
                new SingleStep(129, 17),
                new SingleStep(129, 15),
                new SingleStep(122, 15),
                new SingleStep(122, 17)
            ],
            true
        ),
        action: () => {
            DataService.getInstance()
                .findNpcById(17)
                .displayEmotion('yes');
        },
        messages: [{ cooldown: 5000, message: '* Cough *' }]
    },
    {
        sprite: 'npc_1',
        startX: 10.5,
        startY: 6.5,
        id: 18,
        waypoints: new MultiSteps(
            [
                new SingleStep(133, 18),
                new SingleStep(156, 18),
                new SingleStep(133, 18)
            ],
            true
        ),
        action: () => {
            DataService.getInstance()
                .findNpcById(18)
                .displayEmotion('oh_yes');
        }
    },
    {
        sprite: 'npc_11',
        startX: 10.5,
        startY: 6.5,
        id: 19,
        waypoints: new MultiSteps(
            [
                new SingleStep(184, 18),
                new SingleStep(190, 18),
                new SingleStep(184, 18)
            ],
            false,
            true
        ),
        action: () => {
            DataService.getInstance()
                .findNpcById(19)
                .displayEmotion('cringe');
        }
    },
    {
        sprite: 'npc_12',
        startX: 10.5,
        startY: 6.5,
        id: 20,
        waypoints: new MultiSteps([new SingleStep(177, 18)], false, true),
        action: () => {
            DataService.getInstance()
                .findNpcById(20)
                .displayEmotion('cringe');
        },
        messages: [{ cooldown: 3000, message: 'Hey, Listen!' }]
    },
    {
        sprite: 'fox',
        immuneToVirus: true,
        startX: 10.5,
        startY: 6.5,
        id: 21,
        waypoints: new MultiSteps(
            [
                new SingleStep(183, 26),
                new SingleStep(197, 26),
                new SingleStep(197, 28),
                new SingleStep(183, 28),
                new SingleStep(183, 26)
            ],
            true
        ),
        action: () => {
            DataService.getInstance()
                .findNpcById(21)
                .displayEmotion('cringe');
        }
    },
    {
        sprite: 'fox',
        immuneToVirus: true,
        startX: 10.5,
        startY: 6.5,
        id: 22,
        waypoints: new MultiSteps(
            [
                new SingleStep(86, 10),
                new SingleStep(108, 10),
                new SingleStep(108, 6),
                new SingleStep(86, 6),
                new SingleStep(86, 10)
            ],
            true
        ),
        action: () => {
            DataService.getInstance()
                .findNpcById(22)
                .displayEmotion('oh_yes');
        }
    },
    {
        sprite: 'npc_14',
        startX: 10.5,
        startY: 6.5,
        id: 23,
        constantSpeed: true,
        waypoints: new MultiSteps(
            [
                new SingleStep(16, 27),
                new SingleStep(31, 27),
                new SingleStep(16, 27)
            ],
            true
        ),
        action: () => {}
    },
    {
        sprite: 'npc_12',
        startX: 10.5,
        startY: 6.5,
        id: 24,
        constantSpeed: true,
        waypoints: new MultiSteps(
            [
                new SingleStep(16, 24),
                new SingleStep(31, 24),
                new SingleStep(16, 24)
            ],
            true
        ),
        action: () => {
            DataService.getInstance()
                .findNpcById(24)
                .displayEmotion('oh_no');
        }
    },
    {
        sprite: 'fox',
        immuneToVirus: true,
        startX: 10.5,
        startY: 6.5,
        id: 25,
        constantSpeed: true,
        waypoints: new MultiSteps(
            [
                new SingleStep(21, 20),
                new SingleStep(32, 20),
                new SingleStep(21, 20)
            ],
            true
        ),
        action: () => {
            DataService.getInstance()
                .findNpcById(25)
                .displayEmotion('eek');
        }
    },
    {
        sprite: 'npc_14',
        startX: 10.5,
        startY: 6.5,
        id: 26,
        constantSpeed: true,
        waypoints: new MultiSteps(
            [
                new SingleStep(21, 19),
                new SingleStep(32, 19),
                new SingleStep(21, 19)
            ],
            true
        ),
        action: () => {
            DataService.getInstance()
                .findNpcById(26)
                .displayEmotion('eek');
        }
    },
    {
        sprite: 'npc_2',
        startX: 10.5,
        startY: 6.5,
        id: 27,
        constantSpeed: true,
        waypoints: new MultiSteps(
            [
                new SingleStep(0, 18),
                new SingleStep(13, 18),
                new SingleStep(0, 18)
            ],
            true
        ),
        action: () => {
            DataService.getInstance()
                .findNpcById(27)
                .displayEmotion('eek');
        }
    },
    {
        sprite: 'npc_4',
        startX: 10.5,
        startY: 6.5,
        id: 28,
        constantSpeed: true,
        waypoints: new MultiSteps(
            [
                new SingleStep(0, 19),
                new SingleStep(13, 19),
                new SingleStep(0, 19)
            ],
            true
        ),
        action: () => {
            DataService.getInstance()
                .findNpcById(28)
                .displayEmotion('eek');
        }
    },
    {
        sprite: 'npc_5',
        startX: 10.5,
        startY: 6.5,
        id: 29,
        waypoints: new MultiSteps(
            [
                new SingleStep(72, 23),
                new SingleStep(72, 31),
                new SingleStep(72, 23)
            ],
            true
        ),
        action: () => {
            DataService.getInstance()
                .findNpcById(29)
                .displayEmotion('eek');
        }
    },
    {
        sprite: 'npc_6',
        startX: 10.5,
        startY: 6.5,
        id: 30,
        waypoints: new MultiSteps(
            [
                new SingleStep(73, 18),
                new SingleStep(73, 31),
                new SingleStep(73, 18)
            ],
            true
        ),
        action: () => {
            DataService.getInstance()
                .findNpcById(30)
                .displayEmotion('eek');
        }
    },
    {
        sprite: 'npc_7',
        startX: 10.5,
        startY: 6.5,
        id: 31,
        waypoints: new MultiSteps(
            [
                new SingleStep(74, 18),
                new SingleStep(74, 31),
                new SingleStep(74, 18)
            ],
            true
        ),
        action: () => {
            DataService.getInstance()
                .findNpcById(31)
                .displayEmotion('eek');
        }
    },
    {
        sprite: 'npc_8',
        startX: 10.5,
        startY: 6.5,
        id: 32,
        waypoints: new MultiSteps(
            [
                new SingleStep(75, 23),
                new SingleStep(75, 31),
                new SingleStep(75, 23)
            ],
            true
        ),
        action: () => {
            DataService.getInstance()
                .findNpcById(32)
                .displayEmotion('eek');
        }
    },
    {
        sprite: 'npc_13',
        startX: 10.5,
        startY: 6.5,
        id: 33,
        waypoints: new MultiSteps(
            [
                new SingleStep(51, 24),
                new SingleStep(60, 24),
                new SingleStep(51, 24)
            ],
            true
        ),
        action: () => {
            DataService.getInstance()
                .findNpcById(33)
                .displayEmotion('eek');
        }
    },
    {
        sprite: 'npc_13',
        startX: 10.5,
        startY: 6.5,
        id: 34,
        waypoints: new MultiSteps(
            [
                new SingleStep(48, 19),
                new SingleStep(48, 17),
                new SingleStep(48, 19)
            ],
            true
        ),
        action: () => {
            DataService.getInstance()
                .findNpcById(34)
                .displayEmotion('eek');
        }
    },
    {
        sprite: 'npc_13',
        startX: 10.5,
        startY: 6.5,
        id: 35,
        waypoints: new MultiSteps(
            [
                new SingleStep(64, 19),
                new SingleStep(64, 17),
                new SingleStep(64, 19)
            ],
            true
        ),
        action: () => {
            DataService.getInstance()
                .findNpcById(35)
                .displayEmotion('eek');
        }
    },
    {
        sprite: 'npc_13',
        startX: 10.5,
        startY: 6.5,
        id: 36,
        waypoints: new MultiSteps(
            [
                new SingleStep(24, 10),
                new SingleStep(24, 5),
                new SingleStep(24, 10)
            ],
            true
        ),
        action: () => {
            DataService.getInstance()
                .findNpcById(36)
                .displayEmotion('eek');
        }
    },
    {
        sprite: 'npc_13',
        startX: 10.5,
        startY: 6.5,
        id: 37,
        waypoints: new MultiSteps(
            [
                new SingleStep(29, 9),
                new SingleStep(29, 6),
                new SingleStep(29, 9)
            ],
            true
        ),
        action: () => {
            DataService.getInstance()
                .findNpcById(37)
                .displayEmotion('eek');
        }
    },
    {
        sprite: 'npc_6',
        startX: 20.5,
        startY: 6.5,
        id: 38,
        constantSpeed: true,
        waypoints: new MultiSteps(
            [
                new SingleStep(21, 19),
            ],
            true
        ),
        action: () => {
            DataService.getInstance()
                .findNpcById(38)
                .displayEmotion('eek');
        },
        idleAction: combineActionsIntoScenerio([
            {delay: 1000, action: () => console.log('id38')},
            {delay: 1000, action: () => DataService.getInstance().findNpcById(38).saySentance("Let's do something funny!")},
            {delay: 9000, action: () => DataService.getInstance().findNpcById(38).moveTo(6, 24)},
            {delay: 1000, action: () => console.log('moveTo')},
            {delay: 23000, action: () => DataService.getInstance().findNpcById(38).moveTo(-5, 25)},
            {delay: 1000, action: () => DataService.getInstance().findNpcById(38).saySentance('haha, *FAKE COUGH*')},
            {delay: 1000, action: () => console.log('say')},
        ]),
    },
    {
        sprite: 'npc_6',
        startX: 20.5,
        startY: 6.5,
        id: 39,
        constantSpeed: true,
        waypoints: new MultiSteps(
            [
                new SingleStep(20, 20),
            ],
            true
        ),
        action: () => {
            DataService.getInstance()
                .findNpcById(39)
                .displayEmotion('eek');
        },
        idleAction: combineActionsIntoScenerio([
            {delay: 1000, action: () => console.log('id30')},
            {delay: 3000, action: () => DataService.getInstance().findNpcById(39).saySentance("Hmm, maybe something related with Covid?")},
            {delay: 6000, action: () => DataService.getInstance().findNpcById(39).moveTo(7, 25)},
            {delay: 17000, action: () => DataService.getInstance().findNpcById(39).saySentance("We've got covid, haha")},
            {delay: 7000, action: () => DataService.getInstance().findNpcById(39).moveTo(-5, 25)},
            {delay: 1000, action: () => DataService.getInstance().findNpcById(39).saySentance('*FAKE COUGH*, *FAKE COUGH*')},
        ]),
    },
    {
        sprite: 'npc_6',
        startX: 20.5,
        startY: 7.5,
        id: 40,
        constantSpeed: true,
        waypoints: new MultiSteps(
            [
                new SingleStep(19, 19),
            ],
            true
        ),
        action: () => {
            DataService.getInstance()
                .findNpcById(28)
                .displayEmotion('eek');
        },
        idleAction: combineActionsIntoScenerio([
            {delay: 1000, action: () => console.log('id31')},
            {delay: 5000, action: () => DataService.getInstance().findNpcById(40).saySentance("Why not. Let's frighten the oldies.")},
            {delay: 4000, action: () => DataService.getInstance().findNpcById(40).moveTo(5, 25)},
            {delay: 14000, action: () => DataService.getInstance().findNpcById(40).saySentance("You should be worry. *FAKE COUGH*")},
            {delay: 8000, action: () => DataService.getInstance().findNpcById(6).saySentance("Aghhh!!")},
            {delay: 2000, action: () => DataService.getInstance().findNpcById(6).moveTo(-10, 25)},
            {delay: 1500, action: () => DataService.getInstance().findNpcById(40).moveTo(-5, 25)},
            {delay: 1000, action: () => DataService.getInstance().findNpcById(40).saySentance('Hahaha')},
        ]),
    },
    {
        sprite: 'npc_13',
        startX: 175,
        startY: 58,
        id: 41,
        waypoints: null,
        action: () => {
            console.log('youre close');
        },
        idleAction: combineActionsIntoScenerio([]),
    },
    {
        sprite: 'npc_12',
        startX: 176,
        startY: 59,
        id: 42,
        waypoints: null,
        action: () => {
            console.log('youre close');
        },
        idleAction: combineActionsIntoScenerio([]),
    },
    {
        sprite: 'npc_11',
        startX: 177,
        startY: 59,
        id: 43,
        waypoints: null,
        action: () => {
            console.log('youre close');
        },
        idleAction: combineActionsIntoScenerio([]),
    },
    {
        sprite: 'npc_10',
        startX: 178,
        startY: 57,
        id: 44,
        waypoints: null,
        action: () => {},
        idleAction: combineActionsIntoScenerio([
            {delay: 1000, action: () => {
                !DataService.getInstance().shouldDisplayInfection
                    ?   DialogService.getInstance().openModal('Awesome!', `
                            You've met your friends and you spend some 
                            great time together. Nothing bad happened and you 
                            haven't got infected by any of the people from the 
                            boulevard. Good job! That was easy, wasn't it?
                            `, () => {
                                DialogService.getInstance().openModal('Or maybe not?', `
                                    In fact, in this specific scenario every single 
                                    person on the boulevard was free from the virus.
                                    At least until you joined them... [PRESS 2 ON THE
                                    KEYBOARD TO SEE WHAT HAS REALLY HAPPENED]
                                `)
                            }
                        )
                    :   DialogService.getInstance().openModal('Final', `
                            This time you've infected ${DataService.getInstance().infectedNpcs} people.
                            As you could see, the ignorance of a single person can 
                            have huge impact on the outcome of the global fight 
                            against Coronavirus. Remember, you're not alone, 
                            and your lack of responsibility can cause serious damage 
                            to other people's lives. Remember: be smart, be safe and 
                            stay human.
                        `)   
            }},
        ]),
    },
    {
        sprite: 'npc_8',
        startX: 179,
        startY: 58,
        id: 45,
        waypoints: null,
        action: () => {},
        idleAction: combineActionsIntoScenerio([
            {delay: 1000, action: () => DataService.getInstance().findNpcById(1).saySentance('Whoof!')},
            {delay: 1000, action: () => DataService.getInstance().findNpcById(1).saySentance('Whoof, woof!')},
        ]),
    },
];
