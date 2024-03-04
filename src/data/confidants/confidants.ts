import ChariotIcon from "../../assets/img/Chariot.jpeg";
import CouncillorIcon from "../../assets/img/Councillor.jpeg";
import DeathIcon from "../../assets/img/Death.jpeg";
import DevilIcon from "../../assets/img/Devil.jpeg";
import EmperorIcon from "../../assets/img/Emperor.jpeg";
import EmpressIcon from "../../assets/img/Empress.jpeg";
import FaithIcon from "../../assets/img/Faith.jpeg";
import FortuneIcon from "../../assets/img/Fortune.jpeg";
import HangedIcon from "../../assets/img/Hanged.jpeg";
import HermitIcon from "../../assets/img/Hermit.jpeg";
import HierophantIcon from "../../assets/img/Hierophant.jpeg";
import JusticeIcon from "../../assets/img/Justice.jpeg";
import LoversIcon from "../../assets/img/Lovers.jpeg";
import MoonIcon from "../../assets/img/Moon.jpeg";
import PriestessIcon from "../../assets/img/Priestess.jpeg";
import StarIcon from "../../assets/img/Star.jpeg";
import SunIcon from "../../assets/img/Sun.jpeg";
import TemperanceIcon from "../../assets/img/Temperance.jpeg";
import TowerIcon from "../../assets/img/Tower.jpeg";

export interface Confidant {
  Name: string;
  Arcana: string;
  Icon: string;
  Benefits: Benefit[];
  Events: Event[];
}

export interface Answer {
  Text: string;
  Romance?: true;
  Notes: number;
}

export interface Response {
  Answers: Answer[];
}

export interface SocialRequirement {
  Stat: "Guts" | "Knowledge" | "Kindness" | "Charm" | "Proficiency";
  Level: number;
}

export interface Event {
  Rank: number;
  RomanceRequired?: true;
  SocialRequired?: SocialRequirement;
  DateRequirement?: [number, number];
  Responses: Answer[][];
  FollowUp?: Answer[];
}

export interface Benefit {
  Rank: string;
  Name: string;
  Description: string;
}

export const Confidants: Confidant[] = [
  {
    Name: "Ryuji",
    Arcana: "Chariot",
    Icon: ChariotIcon,
    Benefits: [
      {
        Rank: "2",
        Name: "Punk Talk",
        Description:
          "If negotiations with an upbeat Shadow fails, you can try again.",
      },
      {
        Rank: "3",
        Name: "Follow Up",
        Description:
          "Chance to perform a follow-up attack if Joker’s attack does not down the enemy.",
      },
      {
        Rank: "4",
        Name: "Stealth Dash",
        Description:
          "Makes you less likely to be found in the Metaverse while dashing.",
      },
      {
        Rank: "6",
        Name: "Harisen Recovery",
        Description:
          "Chance to cure status ailments inflicted upon party members.",
      },
      {
        Rank: "7",
        Name: "Insta-kill",
        Description:
          "When encountering a weak Shadow, you may destroy it immediately.",
      },
      {
        Rank: "8",
        Name: "Endure",
        Description:
          "Chance to withstand an otherwise fatal attack with 1 HP remaining.",
      },
      {
        Rank: "9",
        Name: "Protect",
        Description: "Chance to shield Joker from an otherwise fatal attack.",
      },
      {
        Rank: "MAX",
        Name: "Second Awakening",
        Description: "Transforms his Persona into a mythological trickster.",
      },
      {
        Rank: "ROYAL",
        Name: "Second Awakening R",
        Description:
          "Fuse with the mythological Trickster, awakening its true power.",
      },
    ],
    Events: [
      {
        Rank: 2,
        Responses: [
          [
            { Text: "I'm counting on you.", Notes: 3 },
            { Text: "You seem pretty excited.", Notes: 3 },
            { Text: "…Help with what?", Notes: 2 },
          ],
          [
            { Text: "What about them?", Notes: 0 },
            { Text: "And then you punched him?", Notes: 0 },
          ],
          [
            { Text: "Do you want to go back?", Notes: 2 },
            { Text: "Do you regret it?", Notes: 2 },
          ],
          [
            { Text: "You're already fast enough.", Notes: 2 },
            { Text: "Are your legs okay?", Notes: 2 },
            { Text: "It's never too late, man.", Notes: 2 },
          ],
        ],
      },
      {
        Rank: 3,
        Responses: [
          [
            { Text: "Let's not fight.", Notes: 2 },
            { Text: "Want to train with us?", Notes: 0 },
            { Text: "It's nice to meet you.", Notes: 0 },
          ],

          [
            { Text: "Calm down, Ryuji.", Notes: 3 },
            { Text: "Just endure it.", Notes: 2 },
            { Text: "I'll shut them up.", Notes: 0 },
          ],

          [
            { Text: "I can't exactly blame you.", Notes: 2 },
            { Text: "Violence is not the answer.", Notes: 0 },
            { Text: "Yeah, that'd be best.", Notes: 0 },
          ],
        ],
      },
      {
        Rank: 4,
        Responses: [
          [
            { Text: "Nakaoka?", Notes: 0 },
            { Text: "Are you worried about him?", Notes: 2 },
            { Text: "Just leave him be.", Notes: 0 },
          ],

          [
            { Text: "But you're doing great.", Notes: 3 },
            { Text: "It's not so bad.", Notes: 2 },
            { Text: "I know how you feel.", Notes: 3 },
          ],
        ],
      },
      {
        Rank: 5,
        Responses: [
          [
            { Text: "A towel?", Notes: 2 },
            { Text: "Protein powder?", Notes: 3 },
          ],
          [
            { Text: "You seem conflicted.", Notes: 2 },
            { Text: "Do you want to rejoin?", Notes: 2 },
            { Text: "You're done with them, right?", Notes: 0 },
          ],

          [
            { Text: "So he's short?", Notes: 2 },
            { Text: "So he's an asshole?", Notes: 3 },
          ],

          [
            { Text: "Don't worry. I gotcha.", Notes: 2 },
            {
              Text: "I haven't agreed to anything.	Fine, but you're buying ramen.",
              Notes: 0,
            },
          ],
        ],
      },
      {
        Rank: 6,
        Responses: [
          [
            { Text: "Let's stay here.", Notes: 2 },
            { Text: "How about Protein Lovers?", Notes: 2 },
            { Text: "We can train at my place.", Notes: 3 },
          ],
          [
            { Text: "You guys should trust Nakaoka.", Notes: 3 },
            { Text: "This is no time for arguing.", Notes: 3 },
          ],
          [
            { Text: "Absolutely.", Notes: 3 },
            { Text: "More or less.", Notes: 3 },
            { Text: "Not in the slightest.", Notes: 0 },
          ],
          [
            { Text: "I don't get it.", Notes: 0 },
            { Text: "Can you explain that?", Notes: 0 },
          ],
          [
            { Text: "…Huh?", Notes: 0 },
            { Text: "I really don't understand.", Notes: 0 },
          ],
          [
            { Text: "Sounds like you two were close.", Notes: 0 },
            { Text: "Just like you.	So he should've punched back?", Notes: 2 },
          ],
        ],
      },
      {
        Rank: 7,
        Responses: [
          [
            { Text: "Should we change his heart?", Notes: 0 },
            { Text: "Let's talk to Takeishi.", Notes: 3 },
          ],
          [
            { Text: "I think it's cool, Ryuji.", Notes: 3 },
            { Text: "Wait, what?", Notes: 2 },
          ],
          [
            { Text: "Never know until you try", Notes: 2 },
            { Text: "It's out of our hands.", Notes: 0 },
            { Text: "We'll use force if we have to.", Notes: 0 },
          ],
        ],
      },
      {
        Rank: 8,
        Responses: [
          [
            { Text: "What if they start fighting?", Notes: 0 },
            { Text: "I doubt they'll believe you.", Notes: 0 },
          ],
          [
            { Text: "Things turned out for the best.", Notes: 3 },
            { Text: "You deserved it.", Notes: 3 },
          ],
          [
            { Text: "All I did was watch.", Notes: 3 },
            { Text: "Are you gonna pay me back?", Notes: 2 },
          ],
          [
            { Text: "But I was just standing here…", Notes: 2 },
            { Text: "You weren't cool though.", Notes: 3 },
          ],
          [
            { Text: "You did a great job.", Notes: 0 },
            { Text: "So. Closed case?", Notes: 2 },
            { Text: "We make a good team too.", Notes: 0 },
          ],
        ],
      },
      {
        Rank: 9,
        Responses: [
          [
            { Text: "Are you satisfied now?", Notes: 3 },
            { Text: "Not Running?", Notes: 2 },
          ],
          [
            { Text: "What did you say?", Notes: 2 },
            { Text: "Do you have any time for that?", Notes: 2 },
            { Text: "Don't do it.", Notes: 3 },
          ],
          [
            { Text: "You're Right.", Notes: 3 },
            { Text: "I never realized that.", Notes: 3 },
          ],
          [
            { Text: "I agree.", Notes: 2 },
            { Text: "Be more specific.", Notes: 0 },
            { Text: "And where is this place?", Notes: 0 },
          ],
          [
            { Text: "Congratulations.", Notes: 2 },
            { Text: "Got him under control, how?", Notes: 0 },
            { Text: "Better watch out for them.", Notes: 2 },
          ],
        ],
      },
      {
        Rank: 10,
        Responses: [
          [
            { Text: "I'm looking forward to it.", Notes: 3 },
            { Text: "We can't lose either.", Notes: 3 },
          ],
          [
            { Text: "You're welcome.", Notes: 0 },
            { Text: "It's all because of you.", Notes: 0 },
          ],
        ],
      },
    ],
  },
  {
    Name: "Maruki",
    Arcana: "Conucillor",
    Icon: CouncillorIcon,
    Benefits: [
      {
        Rank: "2",
        Name: "Detox X",
        Description:
          "When Joker is inflicted with an ailment, he may recover immediately.",
      },
      {
        Rank: "3",
        Name: "Flow",
        Description:
          "Chance to receive the effects of Charge and Concentrate at the start of battle.",
      },
      {
        Rank: "5",
        Name: "Mindfulness",
        Description: "Chance to restore Joker’s SP when it is low.",
      },
      {
        Rank: "7",
        Name: "Flow Boost",
        Description: "Raises the chance of Flow succeeding.",
      },
      {
        Rank: "9",
        Name: "Detox DX",
        Description: "Raises the chance of Detox X succeeding.",
      },
    ],
    Events: [
      {
        Rank: 2,
        Responses: [
          [
            { Text: "Didn't have much choice. ", Notes: 0 },
            { Text: "We made a deal. ", Notes: 2 },
            { Text: "I'm a little nervous. ", Notes: 2 },
          ],
          [
            { Text: "It's in the past. ", Notes: 0 },
            { Text: "I'm doing okay now. ", Notes: 0 },
            { Text: "So much for privacy. ", Notes: 0 },
          ],
          [
            { Text: "But it sounds right. ", Notes: 3 },
            { Text: "Yep. ", Notes: 2 },
            { Text: "Kinda creeping me out here. ", Notes: 0 },
          ],
          [
            { Text: "So… what? ", Notes: 0 },
            { Text: "I'll need more details. ", Notes: 0 },
            { Text: "Uh… ", Notes: 0 },
          ],
          [
            { Text: "Well, okay. ", Notes: 2 },
            { Text: "Better make it worth it. ", Notes: 0 },
            { Text: "Why me, though? ", Notes: 0 },
          ],
        ],
      },

      {
        Rank: 3,
        Responses: [
          [
            { Text: "So they have, huh? ", Notes: 2 },
            { Text: "You worry too much. ", Notes: 0 },
            { Text: "Thanks to you, probably. ", Notes: 2 },
          ],
          [
            { Text: "Of course. ", Notes: 2 },
            { Text: "Yeah, for our deal. ", Notes: 2 },
            { Text: "I forgot. ", Notes: 0 },
          ],
          [
            { Text: "When someone betrays me. ", Notes: 0 },
            { Text: "When I lie. ", Notes: 0 },
            { Text: "When I get punched. ", Notes: 0 },
          ],
          [
            { Text: "That one seems necessary ", Notes: 2 },
            { Text: "We'd be better off without it. ", Notes: 0 },
            { Text: "It's a seed for new loves. ", Notes: 2 },
          ],
          [
            { Text: "Did that help? ", Notes: 2 },
            { Text: "Don't worry about it. ", Notes: 2 },
          ],
          [
            { Text: "Good work over there. ", Notes: 2 },
            { Text: "So you're actually working? ", Notes: 0 },
            { Text: "Getting to your research now? ", Notes: 0 },
          ],
        ],
      },

      {
        Rank: 4,
        Responses: [
          [
            { Text: "Where's this coming from? ", Notes: 0 },
            { Text: "What are you talking about? ", Notes: 0 },
          ],
          [
            { Text: "I know, right…? ", Notes: 3 },
            { Text: "It's not the worst. ", Notes: 0 },
            { Text: "Talk about a reward. ", Notes: 2 },
          ],
          [
            { Text: "That'd be great. ", Notes: 2 },
            { Text: "Is that possible? ", Notes: 0 },
            { Text: "Is that what you're researching? ", Notes: 3 },
          ],
          [
            { Text: "…… ", Notes: 0 },
            { Text: "Are you okay? ", Notes: 0 },
          ],
          [
            { Text: "That's a grand plan. ", Notes: 2 },
            { Text: "You're so kind. ", Notes: 2 },
          ],
          [
            { Text: "That sounds fun. ", Notes: 3 },
            { Text: "I'm not the “free labor” type. ", Notes: 0 },
            { Text: "Nope. ", Notes: 0 },
          ],
          [
            { Text: "I'm completely fine. ", Notes: 2 },
            { Text: "It's part of our deal, so… ", Notes: 2 },
            { Text: "I'm struggling, to be honest. ", Notes: 0 },
          ],
        ],
      },

      {
        Rank: 5,
        Responses: [
          [
            { Text: "This looks great! ", Notes: 3 },
            { Text: "How old do you think I am? ", Notes: 0 },
            { Text: "I could just take cash… ", Notes: 2 },
          ],
          [
            { Text: "The one-cookie container. ", Notes: 0 },
            { Text: "The ten-cookie container. ", Notes: 0 },
            { Text: "It was a tie. ", Notes: 0 },
          ],
          [
            { Text: "I never considered that. ", Notes: 0 },
            { Text: "They're getting played. ", Notes: 2 },
            { Text: "You know, you're right. ", Notes: 3 },
          ],
          [
            { Text: "My senses lied to me! ", Notes: 2 },
            { Text: "Hey, as long as it tastes good. ", Notes: 2 },
            { Text: "It's a little scary.  ", Notes: 0 },
          ],
          [
            { Text: "Not “truth” exactly… ", Notes: 0 },
            { Text: "I guess so. ", Notes: 2 },
            { Text: "I don't know. ", Notes: 0 },
          ],
          [
            { Text: "I really don't mind. ", Notes: 2 },
            { Text: "Come on, man. ", Notes: 0 },
            { Text: "It was thought-provoking. ", Notes: 2 },
          ],
        ],
      },

      {
        Rank: 6,
        Responses: [
          [
            { Text: "You wanted to talk? ", Notes: 0 },
            { Text: "Another cup? ", Notes: 2 },
            { Text: "We've got curry, too. ", Notes: 2 },
          ],
          [
            { Text: "I can do that. ", Notes: 3 },
            { Text: "It's a deal. ", Notes: 2 },
            { Text: "I'm not up for this… ", Notes: 0 },
          ],
          [
            { Text: "Isn't that enough? ", Notes: 0 },
            { Text: "You need more than that? ", Notes: 0 },
          ],
          [
            { Text: "So what CAN we do? ", Notes: 0 },
            { Text: "It's a hard question… ", Notes: 0 },
            { Text: "So give up. ", Notes: 2 },
          ],
          [
            { Text: "All hearts share some things. ", Notes: 0 },
            { Text: "What if they're connected? ", Notes: 0 },
          ],
          [
            { Text: "Calm down. ", Notes: 0 },
            { Text: "Where's this coming from? ", Notes: 0 },
            { Text: "Cognitive pscience? ", Notes: 0 },
          ],
          [
            { Text: "Calm down. ", Notes: 2 },
            { Text: "What's going on? ", Notes: 2 },
            { Text: "Heavy breathing? Pervert. ", Notes: 0 },
          ],
        ],
      },

      {
        Rank: 7,
        Responses: [
          [
            { Text: "You really are dedicated. ", Notes: 3 },
            { Text: "Are they even relevant? ", Notes: 3 },
            { Text: "Are you a fan? ", Notes: 3 },
          ],
          [
            { Text: "No idea. ", Notes: 3 },
            { Text: "As in, removing them? ", Notes: 3 },
            { Text: "How about you Maruki? ", Notes: 3 },
          ],
          [
            { Text: "The change of heart…? ", Notes: 3 },
            { Text: "…… ", Notes: 3 },
          ],
          [
            { Text: "I have no clue. ", Notes: 3 },
            { Text: "Sounds pretty far-fetched. ", Notes: 3 },
            { Text: "It's intriguing. ", Notes: 3 },
          ],
        ],
      },

      {
        Rank: 8,
        Responses: [
          [
            { Text: "I'm good on cookies, thanks. ", Notes: 2 },
            { Text: "What do you mean? ", Notes: 3 },
            { Text: "Thanks, but I should get going. ", Notes: 0 },
          ],
          [
            { Text: "Ooh, really? ", Notes: 3 },
            { Text: "Can you afford that? ", Notes: 2 },
            { Text: "Sorry, I prefer sushi. ", Notes: 2 },
          ],
          [
            { Text: "Thanks for the food! ", Notes: 3 },
            { Text: "Self-control much? ", Notes: 0 },
            { Text: "This is quite the spread. ", Notes: 2 },
          ],
          [
            { Text: "I'm his pupil. ", Notes: 2 },
            { Text: "It's complicated. ", Notes: 0 },
            { Text: "We've made a deal. ", Notes: 3 },
          ],
          [
            { Text: "Congratulations. ", Notes: 3 },
            { Text: "Way to go. ", Notes: 3 },
          ],
          [
            { Text: "I sure do. ", Notes: 3 },
            { Text: "Let's celebrate. ", Notes: 3 },
          ],
          [
            { Text: "She's a girlfriend of yours? ", Notes: 0 },
            { Text: "Who's Rumi? ", Notes: 0 },
            { Text: "Should I leave you two to talk? ", Notes: 0 },
          ],
          [
            { Text: "He's a good friend. ", Notes: 2 },
            { Text: "Learn some independence. ", Notes: 0 },
            { Text: "You'll get the tab next time. ", Notes: 0 },
          ],
        ],
      },
      {
        Rank: 9,
        Responses: [
          [
            { Text: "Yeah. ", Notes: 0 },
            { Text: "Kind of. ", Notes: 0 },
          ],
          [
            { Text: "Kind of sad… ", Notes: 3 },
            { Text: "Is our deal over? ", Notes: 2 },
            { Text: "Well… take care of yourself. ", Notes: 2 },
          ],
        ],
      },
    ],
  },
  {
    Name: "Takemi",
    Arcana: "Death",
    Icon: DeathIcon,
    Benefits: [
      {
        Rank: "1",
        Name: "Rejuvenation",
        Description: "Increases the selection of healing items at the clinic.",
      },
      {
        Rank: "3",
        Name: "Sterilization",
        Description: "Adds more healing items to the clinic.",
      },
      {
        Rank: "5",
        Name: "Immunization",
        Description: "Adds support items to the inventory at the clinic.",
      },
      {
        Rank: "7",
        Name: "Discount",
        Description: "Decreases the price for all items sold at the clinic.",
      },
      {
        Rank: "MAX",
        Name: "Resuscitation",
        Description: "Increase the selection of revival items at the clinic.",
      },
    ],
    Events: [
      {
        Rank: 1,
        Responses: [
          [
            { Text: "Fine by me. ", Notes: 1 },
            { Text: "Please go easy on me. ", Notes: 3 },
            { Text: "So many pretty lights… ", Notes: 1 },
          ],
        ],
      },
      {
        Rank: 2,
        SocialRequired: { Stat: "Guts", Level: 2 },
        Responses: [
          [
            { Text: "I have a bad heart. ", Notes: 2 },
            { Text: "We're on a date. ", Notes: 0 },
            { Text: "I know my rights. ", Notes: 0 },
          ],
          [
            { Text: "I agree. ", Notes: 2 },
            { Text: "Harassment? ", Notes: 0 },
            { Text: "The Plague? ", Notes: 0 },
          ],
          [
            { Text: "I'm totally fine. ", Notes: 2 },
            { Text: "I feel lightheaded ", Notes: 0 },
            { Text: "I think I have superpowers ", Notes: 2 },
          ],
        ],
      },
      {
        Rank: 3,
        Responses: [
          [
            { Text: "What was that about? ", Notes: 0 },
            { Text: "Was that an emergency? ", Notes: 0 },
          ],
          [
            { Text: "A medical error? ", Notes: 0 },
            { Text: "What do you mean? ", Notes: 0 },
          ],
          [
            { Text: "I don't mind. ", Notes: 2 },
            { Text: "Is it true? ", Notes: 0 },
            { Text: "I need the medicine. ", Notes: 2 },
          ],
          [
            { Text: "Of course not. ", Notes: 2 },
            { Text: "I don't think I did… ", Notes: 0 },
            { Text: "Have you? ", Notes: 0 },
          ],
        ],
      },
      {
        Rank: 4,
        Responses: [
          [
            { Text: "You'll be OK. ", Notes: 0 },
            { Text: "Dr. Takemi will help. ", Notes: 2 },
          ],
          [
            { Text: "You seem happy. ", Notes: 3 },
            { Text: "You're so kind. ", Notes: 2 },
            { Text: "Why free? ", Notes: 2 },
          ],
          [
            { Text: "I'll reflect on my mistakes ", Notes: 2 },
            { Text: "But she ended up okay. ", Notes: 0 },
            { Text: "Punish me more. ", Notes: 0 },
          ],
        ],
      },
      {
        Rank: 5,
        Responses: [
          [
            { Text: "They trust you. ", Notes: 0 },
            { Text: "Was it really your fault? ", Notes: 0 },
          ],
          [
            { Text: "I had no idea. ", Notes: 0 },
            { Text: "It's not too late. ", Notes: 0 },
          ],
          [
            { Text: "That's good. ", Notes: 3 },
            { Text: "When will it be done? ", Notes: 2 },
            { Text: "… “Probably”? ", Notes: 0 },
          ],
          [
            { Text: "About Miwa-chan? ", Notes: 2 },
            { Text: "About Oyamada? ", Notes: 0 },
            { Text: "About Crawford-Ende's? ", Notes: 0 },
          ],
        ],
      },
      {
        Rank: 6,
        Responses: [
          [
            { Text: "Well, someone's popular. ", Notes: 0 },
            { Text: "You seem annoyed. ", Notes: 0 },
            { Text: "Did something happen? ", Notes: 0 },
          ],
          [
            { Text: "Having fun? ", Notes: 0 },
            { Text: "You ARE a genius. ", Notes: 0 },
          ],
          [
            { Text: "You're a masochist. ", Notes: 0 },
            { Text: "It suits you. ", Notes: 3 },
            { Text: "You're not honest. ", Notes: 2 },
          ],
          [
            { Text: "You can count on me. ", Notes: 2 },
            { Text: "I think I'm at my limit… ", Notes: 0 },
            { Text: "Anything for you. ", Notes: 2 },
          ],
        ],
      },
      {
        Rank: 7,
        Responses: [
          [
            { Text: "This is harassment. ", Notes: 2 },
            { Text: "She's a great doctor. ", Notes: 2 },
            { Text: "Please be quiet. ", Notes: 2 },
          ],
          [
            { Text: "Don't lose hope. ", Notes: 0 },
            { Text: "Let's ask for details. ", Notes: 0 },
            { Text: "…… ", Notes: 0 },
          ],
          [
            { Text: "Just rest for today. ", Notes: 2 },
            { Text: "Anything I can do? ", Notes: 2 },
            { Text: "Let's retaliate. ", Notes: 0 },
          ],
          [
            { Text: "It was inevitable. ", Notes: 0 },
            { Text: "We all do sometimes. ", Notes: 3 },
            { Text: "I'm glad you did. ", Notes: 2 },
          ],
        ],
      },
      {
        Rank: 7.5,
        SocialRequired: { Stat: "Charm", Level: 4 },
        Responses: [
          [
            { Text: "What about Miwa-chan? ", Notes: 0 },
            { Text: "You OK with this? ", Notes: 0 },
          ],
          [
            { Text: "Don't give up. ", Notes: 0 },
            { Text: "Anything you can do? ", Notes: 0 },
            { Text: "I'm your ally. ", Notes: 2 },
          ],
          [
            { Text: "You gonna run away? ", Notes: 0 },
            { Text: "And your patients? ", Notes: 0 },
          ],
          [
            { Text: "What's his full name? ", Notes: 0 },
            { Text: "Tell me about him. ", Notes: 0 },
          ],
          [
            { Text: "I won't do anything. ", Notes: 0 },
            { Text: "It's for my research. ", Notes: 0 },
          ],
        ],
      },
      {
        Rank: 8,
        Responses: [
          [
            { Text: "Miwa-chan is alive. ", Notes: 0 },
            { Text: "Oyamada lied to you. ", Notes: 0 },
          ],
          [
            { Text: "You should hurry. ", Notes: 2 },
            { Text: "Let's get to work, doctor. ", Notes: 3 },
            { Text: "It's not over yet. ", Notes: 3 },
          ],
          [
            { Text: "It's for Miwa-chan ", Notes: 3 },
            { Text: "It's for my exams. ", Notes: 2 },
            { Text: "It's for you. ", Notes: 3 },
          ],
          [
            { Text: "I'll be cheering you on. ", Notes: 2 },
            { Text: "Don't burn yourself out. ", Notes: 0 },
            { Text: "Anything else I can do. ", Notes: 2 },
          ],
        ],
      },
      {
        Rank: 9,
        Responses: [
          [
            { Text: "Don't worry about it. ", Notes: 2 },
            { Text: "It was for my exams. ", Notes: 2 },
            { Text: "It was rough. ", Notes: 3 },
          ],
          [
            { Text: "That's troubling. ", Notes: 0 },
            { Text: "And your patients? ", Notes: 0 },
          ],
          [
            { Text: "I wanted to see you. ", Notes: 0, Romance: true },
            { Text: "It was for my exams. ", Notes: 0 },
          ],
          [
            { Text: "I love you. ", Notes: 2, Romance: true },
            { Text: "What do you think? ", Notes: 0 },
          ],
          [
            { Text: "It isn't a joke. ", Notes: 3, Romance: true },
            { Text: "That sounds good. ", Notes: 0 },
          ],
          [
            { Text: "It's true love. ", Notes: 0 },
            { Text: "So did you. ", Notes: 2 },
            { Text: "I've always loved you. ", Notes: 0 },
          ],
        ],
      },
      {
        Rank: 10,
        RomanceRequired: true,
        Responses: [
          [
            { Text: "Uh, what? ", Notes: 0 },
            { Text: "Is that a joke? ", Notes: 0 },
          ],
          [
            { Text: "It's a coincidence. ", Notes: 0 },
            { Text: "I wonder… ", Notes: 2 },
            { Text: "So what if it's true? ", Notes: 0 },
          ],
          [
            { Text: "What kind? ", Notes: 2 },
            { Text: "Yes, please. ", Notes: 3 },
          ],
        ],
      },
    ],
  },
  {
    Name: "Ohya",
    Arcana: "Devil",
    Icon: DevilIcon,
    Benefits: [
      {
        Rank: "1",
        Name: "Rumor-filled Scoop",
        Description:
          "Decreases the Security Level when you find a new Safe Room.",
      },
      {
        Rank: "4",
        Name: "Shocking Scoop",
        Description:
          "Security Level raises slowly, and lowers upon defeating an ambushed enemy.",
      },
      {
        Rank: "5",
        Name: "Unprecedented Scoop",
        Description:
          "Allows you to begin with a low Security Level when infiltrating a Palace.",
      },
      {
        Rank: "7",
        Name: "Outrageous Scoop",
        Description:
          "Allows you to begin with an even lower Security Level when infiltrating a Palace.",
      },
      {
        Rank: "MAX",
        Name: "Legendary Scoop",
        Description:
          "Makes it easier to ambush the enemy, regardless of Security Level.",
      },
    ],
    Events: [
      {
        Rank: 1,
        Responses: [
          [
            { Text: "Thanks ", Notes: 0 },
            { Text: "	Sounds like a good time. ", Notes: 0 },
            { Text: "	Doing what? ", Notes: 0 },
          ],
        ],
      },
      {
        Rank: 2,
        Responses: [
          [
            { Text: "Why do you ask? ", Notes: 0 },
            { Text: "	I don't. ", Notes: 0 },
            { Text: "	Mishima might… ", Notes: 2 },
          ],
          [
            { Text: "Worth…? ", Notes: 0 },
            { Text: "	What about their justice? ", Notes: 0 },
          ],
          [
            { Text: "I like the atmosphere. ", Notes: 0 },
            { Text: "	It's for the article. ", Notes: 2 },
            { Text: "	Tell me about that incident. ", Notes: 0 },
          ],
        ],
      },
      {
        Rank: 3,
        Responses: [
          [
            { Text: "Minors couldn't do that stuff. ", Notes: 0 },
            { Text: "	You might be right. ", Notes: 0 },
            { Text: "	You shouldn't make assumptions. ", Notes: 2 },
          ],
          [
            { Text: "What's the difference? ", Notes: 0 },
            { Text: "	I'm sure you are. ", Notes: 0 },
          ],
          [
            { Text: "Why not change careers? ", Notes: 0 },
            { Text: "	Maybe you should quit. ", Notes: 0 },
          ],
          [
            { Text: "What was she accused of? ", Notes: 0 },
            { Text: "	What happened? ", Notes: 0 },
            { Text: "	She was falsely accused? ", Notes: 2 },
          ],
        ],
      },
      {
        Rank: 4,
        Responses: [
          [
            { Text: "What's this about? ", Notes: 0 },
            { Text: "	She hasn't done anything wrong. ", Notes: 0 },
          ],
          [
            { Text: "Of course we are. ", Notes: 2 },
            { Text: "	Don't tell anybody. ", Notes: 2 },
          ],
          [
            { Text: "Our movie is about to start. ", Notes: 0 },
            { Text: "	That's enough. ", Notes: 0 },
            { Text: "	We're dating. Seriously. ", Notes: 0 },
          ],
          [
            { Text: "Leave it to me. ", Notes: 2 },
            { Text: "	That was our deal. ", Notes: 2 },
            { Text: "	Anything for my girlfriend. ", Notes: 0 },
          ],
        ],
      },
      {
        Rank: 5,
        Responses: [
          [
            { Text: "Because of your investigation? ", Notes: 0 },
            { Text: "	Because of your incident? ", Notes: 0 },
            { Text: "	Are you sure we're the same? ", Notes: 0 },
          ],
          [
            { Text: "I'm curious. ", Notes: 0 },
            { Text: "	You can trust me. ", Notes: 0 },
          ],
          [
            { Text: "What was the cause of death? ", Notes: 0 },
            { Text: "	Who killed him? ", Notes: 0 },
          ],
          [
            { Text: "That sounds like defamation. ", Notes: 2 },
            { Text: "	That's unforgivable. ", Notes: 3 },
            { Text: "	How's your search going? ", Notes: 0 },
          ],
          [
            { Text: "I don't mind. ", Notes: 2 },
            { Text: "	As long as I'm compensated. ", Notes: 0 },
            { Text: "	I did the same to you. ", Notes: 0 },
          ],
        ],
      },
      {
        Rank: 6,
        Responses: [
          [
            { Text: "Did something bad happen? ", Notes: 0 },
            { Text: "	Having trouble at work? ", Notes: 0 },
          ],
          [
            { Text: "He must not like you. ", Notes: 2 },
            { Text: "	Did he find out? ", Notes: 0 },
          ],
          [
            { Text: "Do you have evidence of that? ", Notes: 0 },
            { Text: "	You should trust in her. ", Notes: 2 },
            { Text: "	You might be right. ", Notes: 0 },
          ],
          [
            { Text: "That's the spirit ", Notes: 2 },
            { Text: "	You're a great journalist. ", Notes: 2 },
            { Text: "	What about your quota? ", Notes: 0 },
          ],
          [
            { Text: "Glad to hear that. ", Notes: 0 },
            { Text: "	Don't work yourself to death. ", Notes: 0 },
            { Text: "	I'll dig up some more for you. ", Notes: 2 },
          ],
        ],
      },
      {
        Rank: 7,
        Responses: [
          [
            { Text: "What was that about? ", Notes: 0 },
            { Text: "	Could it be…? ", Notes: 0 },
          ],
          [
            { Text: "Calm down. ", Notes: 2 },
            { Text: "	Don't let him provoke you. ", Notes: 3 },
            { Text: "	Let's think of another way. ", Notes: 3 },
          ],
          [
            { Text: "You should work on that. ", Notes: 2 },
            { Text: "	You're charming as you are. ", Notes: 3 },
          ],
          [
            { Text: "That's the spirit. ", Notes: 2 },
            { Text: "	Sounds tough. ", Notes: 0 },
            { Text: "	Don't strain yourself. ", Notes: 0 },
          ],
        ],
      },
      {
        Rank: 7.5,
        Responses: [
          [
            { Text: "Like what? ", Notes: 0 },
            { Text: "	You seem tired. ", Notes: 2 },
            { Text: "	So… I have a pet cat… ", Notes: 0 },
          ],
          [
            { Text: "What's the chief's name? ", Notes: 0 },
            { Text: "	Tell me more about him. ", Notes: 0 },
          ],
        ],
      },
      {
        Rank: 8,
        Responses: [
          [
            { Text: "He reflected on his actions. ", Notes: 0 },
            { Text: "	Aren't you happy? ", Notes: 0 },
          ],
          [
            { Text: "Did I? Can't remember. ", Notes: 0 },
            { Text: "	Uh, nope. ", Notes: 0 },
          ],
          [
            { Text: "I'm glad to hear that. ", Notes: 0 },
            { Text: "	Thank god. ", Notes: 0 },
          ],
          [
            { Text: "That's not like you. ", Notes: 3 },
            { Text: "	You need pursue the truth. ", Notes: 3 },
            { Text: "	I'll go with you. ", Notes: 3 },
          ],
          [
            { Text: "Good luck. ", Notes: 2 },
            { Text: "	Be careful. ", Notes: 2 },
            { Text: "	Grab a souvenir for me. ", Notes: 0 },
          ],
        ],
      },
      {
        Rank: 9,
        Responses: [
          [
            { Text: "Are you OK? ", Notes: 0 },
            { Text: "	Did you learn the truth? ", Notes: 0 },
          ],
          [
            { Text: "What are you going to do? ", Notes: 0 },
            { Text: "	You're not giving up, are you? ", Notes: 2 },
          ],
          [
            { Text: "I can't leave you. ", Notes: 3 },
            { Text: "	I want to help. ", Notes: 3 },
            { Text: "	I need those articles. ", Notes: 0 },
          ],
          [
            { Text: "Of course not. ", Notes: 0 },
            { Text: "	No way. ", Notes: 0 },
          ],
          [
            { Text: "I took it seriously. ", Notes: 0, Romance: true },
            { Text: "I didn't take it seriously. ", Notes: 0 },
          ],
          [
            { Text: "I love you, Ichiko. ", Notes: 0, Romance: true },
            { Text: "I'm just kidding. ", Notes: 0 },
          ],
          [
            { Text: "I wanted to hear your voice. ", Notes: 2 },
            { Text: "	Please don't dump me. ", Notes: 2 },
            { Text: "	IloveyouIloveyouIloveyou. ", Notes: 0 },
          ],
        ],
      },
      {
        Rank: 10,
        RomanceRequired: true,
        Responses: [
          [
            { Text: "You're really earnest. ", Notes: 2 },
            { Text: "	Is that entertainment? ", Notes: 3 },
            { Text: "	You don't need my info? ", Notes: 0 },
          ],
          [
            { Text: "I'm glad to hear that. ", Notes: 3 },
            { Text: "	I'll read the next issue. ", Notes: 3 },
          ],
          [
            { Text: "So you knew all along? ", Notes: 0 },
            { Text: "	It's just a coincidence. ", Notes: 0 },
            { Text: "	Lala's the real phantom thief. ", Notes: 0 },
          ],
          [
            { Text: "It's up to you. ", Notes: 3 },
            { Text: "	I want to go to your place. ", Notes: 3 },
          ],
        ],
      },
    ],
  },
  {
    Name: "Yusuke",
    Arcana: "Emperor",
    Icon: EmperorIcon,
    Benefits: [
      {
        Rank: "1",
        Name: "Card Duplication.",
        Description:
          "Allows Yusuke to use Blank Cards to duplicate Skill Cards.",
      },
      {
        Rank: "3",
        Name: "Followup",
        Description:
          "Chance to perform a follow-up attack if Joker’s attack does not down the enemy.",
      },
      {
        Rank: "4",
        Name: "Art Talk",
        Description:
          "If negotiations with a lone Shadow fails, you can try again.",
      },
      {
        Rank: "5",
        Name: "Card Creation",
        Description:
          "Allows Yusuke to create any Skill card he has copied once before.",
      },
      {
        Rank: "6",
        Name: "Harisen Recovery",
        Description:
          "Chance to cure status ailments inflicted upon party members.",
      },
      {
        Rank: "7",
        Name: "Live Painting",
        Description:
          "Allows Yusuke to use Card Duplication and Card Creation on the spot.",
      },
      {
        Rank: "8",
        Name: "Endure",
        Description:
          "Chance to withstand an otherwise fatal attack with 1 HP remaining.",
      },
      {
        Rank: "9",
        Name: "Protect",
        Description: "Chance to shield Joker from an otherwise fatal attack.",
      },
      {
        Rank: "MAX",
        Name: "Second Awakening",
        Description: "Transforms his Persona into a mythological trickster.",
      },
      {
        Rank: "ROYAL",
        Name: "Second Awakening R",
        Description:
          "Fuse with the mythological Trickster, awakening its true power.",
      },
    ],
    Events: [
      {
        Rank: 1,
        Responses: [
          [
            { Text: "Thanks. ", Notes: 2 },
            { Text: "	I'll try not to. ", Notes: 2 },
            { Text: "	I'll be asking a lot. ", Notes: 3 },
          ],
        ],
      },
      {
        Rank: 2,
        Responses: [
          [
            { Text: "It's novel. ", Notes: 2 },
            { Text: "	It's enigmatic. ", Notes: 2 },
            { Text: "	…What is it? ", Notes: 0 },
          ],
          [
            { Text: "I can't wait. ", Notes: 3 },
            { Text: "	I hope you're right. ", Notes: 3 },
            { Text: "	Will people like it? ", Notes: 0 },
          ],
          [
            { Text: "You're already doing enough. ", Notes: 2 },
            { Text: "	I'm looking forward to it. ", Notes: 0 },
            { Text: "	Will you really? ", Notes: 0 },
          ],
        ],
      },
      {
        Rank: 3,
        Responses: [
          [
            { Text: "That was harsh. ", Notes: 0 },
            { Text: "	What a dick. ", Notes: 0 },
            { Text: "	Don't let it bother you. ", Notes: 2 },
          ],
          [
            { Text: "Stop exaggerating. ", Notes: 0 },
            { Text: "	This is just the beginning. ", Notes: 0 },
            { Text: "	Stand up. ", Notes: 0 },
          ],
          [
            { Text: "You're really giving up? ", Notes: 2 },
            { Text: "	This isn't like you. ", Notes: 3 },
            { Text: "	Stand up, Ysuke. ", Notes: 0 },
          ],
          [
            { Text: "How exactly? ", Notes: 2 },
            { Text: "	That's the spirit. ", Notes: 2 },
          ],
          [
            { Text: "That's the spirit. ", Notes: 2 },
            { Text: "	You're taking this too far. ", Notes: 0 },
            { Text: "	That's all? ", Notes: 0 },
          ],
        ],
      },
      {
        Rank: 4,
        Responses: [
          [
            { Text: "What are we doing here? ", Notes: 0 },
            { Text: "	Why are we in a boat? ", Notes: 2 },
            { Text: "	I should bring a girl here. ", Notes: 2 },
          ],
          [
            { Text: "Love comes in all forms. ", Notes: 3 },
            { Text: "	Maybe you should train more. ", Notes: 2 },
            { Text: "	You have a wild imagination. ", Notes: 0 },
          ],
          [
            { Text: "Don't get discouraged. ", Notes: 2 },
            { Text: "	Just keep drawing. ", Notes: 0 },
            { Text: "	You lack love yourself. ", Notes: 0 },
          ],
        ],
      },
      {
        Rank: 5,
        Responses: [
          [
            { Text: "Make me beautiful. ", Notes: 0 },
            { Text: "	I dunno if I can do it… ", Notes: 2 },
            { Text: "	Do you want me to strip? ", Notes: 3 },
          ],
          [
            { Text: "I'm sure you will. ", Notes: 3 },
            { Text: "	It doesn't look like it. ", Notes: 3 },
            { Text: "	Do you want to give up? ", Notes: 2 },
          ],
          [
            { Text: "Don't overthink it. ", Notes: 0 },
            { Text: "	You have to keep drawing. ", Notes: 0 },
            { Text: "	There's still hope. ", Notes: 2 },
          ],
        ],
      },
      {
        Rank: 6,
        SocialRequired: { Stat: "Proficiency", Level: 4 },
        Responses: [
          [
            { Text: "It feels nostalgic. ", Notes: 2 },
            { Text: "	Why are we here again? ", Notes: 0 },
            { Text: "	Are you going in? ", Notes: 0 },
          ],
          [
            { Text: "We should get it fixed. ", Notes: 0 },
            { Text: "	Let's force it open. ", Notes: 0 },
          ],
          [
            { Text: "Are you OK? ", Notes: 0 },
            { Text: "	You're not looking so good. ", Notes: 0 },
          ],
          [
            { Text: "Maybe he was sympathetic. ", Notes: 3 },
            { Text: "	He somehow knew you had skill. ", Notes: 2 },
            { Text: "	I couldn't possibly tell you. ", Notes: 3 },
          ],
          [
            { Text: "He had a certain dignity. ", Notes: 2 },
            { Text: "	He seems reliable. ", Notes: 0 },
            { Text: "	I'm not sure. ", Notes: 0 },
          ],
        ],
      },
      {
        Rank: 7,
        Responses: [
          [
            { Text: "That's a great name. ", Notes: 0 },
            { Text: "	What do you mean? ", Notes: 2 },
            { Text: "	Handsome…? ", Notes: 0 },
          ],
          [
            { Text: "The truth is within you. ", Notes: 3 },
            { Text: "	Money is important. ", Notes: 0 },
          ],
          [
            { Text: "Calm down. ", Notes: 2 },
            { Text: "	It's not a crime to enjoy sushi. ", Notes: 2 },
            { Text: "	Let's go again sometime. ", Notes: 0 },
          ],
        ],
      },
      {
        Rank: 8,
        Responses: [
          [
            { Text: "Scenery is always nice. ", Notes: 0 },
            { Text: "	I'd say Morgana. ", Notes: 0 },
            { Text: "	It has to be Ann. ", Notes: 2 },
          ],
          [
            { Text: "What's wrong with that? ", Notes: 2 },
            { Text: "	The same applies to everyone. ", Notes: 0 },
            { Text: "	You've really grown, Yusuke. ", Notes: 3 },
          ],
        ],
      },
      {
        Rank: 9,
        Responses: [
          [
            { Text: "Her love for her son. ", Notes: 3 },
            { Text: "	The pain of separation. ", Notes: 3 },
            { Text: "	I don't know. ", Notes: 2 },
          ],
          [
            { Text: "You've really changed, Yusuke. ", Notes: 3 },
            { Text: "	That's a great idea. ", Notes: 2 },
            { Text: "	It won't be easy. ", Notes: 0 },
          ],
        ],
      },
      {
        Rank: 10,
        Responses: [
          [
            { Text: "It turned out well. ", Notes: 0 },
            { Text: "	So you added hope? ", Notes: 0 },
          ],
          [
            { Text: "You provoked Yusuke on purpose? ", Notes: 0 },
            { Text: "	Are you scheming something? ", Notes: 0 },
          ],
          [
            { Text: "“He”? ", Notes: 0 },
            { Text: "	Do you mean Madarame? ", Notes: 0 },
          ],
          [
            { Text: "He was a good man deep down. ", Notes: 3 },
            { Text: "	That was another aspect of him. ", Notes: 3 },
          ],
          [
            { Text: "Yeah… ", Notes: 0 },
            { Text: "	You're stranger, Yusuke. ", Notes: 0 },
            { Text: "	Are you sure about this? ", Notes: 0 },
          ],
        ],
      },
    ],
  },
  {
    Name: "Haru",
    Arcana: "Empress",
    Icon: EmpressIcon,
    Benefits: [
      {
        Rank: "1",
        Name: "Cultivation",
        Description:
          "Allows you to grow vegetables with Haru on the Shujin Academy rooftop.",
      },
      {
        Rank: "3",
        Name: "Follow Up",
        Description:
          "Chance to perform a follow-up attack if Joker’s attack does not down the enemy.",
      },
      {
        Rank: "4",
        Name: "Celebrity Talk",
        Description:
          "If negotiations amidst a group of Shadows fails, you can try again.",
      },
      {
        Rank: "5",
        Name: "Bumper Crop",
        Description:
          "Increases the total vegetable yield for a single harvest.",
      },
      {
        Rank: "6",
        Name: "Harisen Recovery",
        Description:
          "Chance to cure status ailments inflicted upon party members.",
      },
      {
        Rank: "7",
        Name: "Soil Improvement",
        Description:
          "Decreases the total amount of time it takes to cultivate vegetables.",
      },
      {
        Rank: "8",
        Name: "Endure",
        Description:
          "Chance to withstand an otherwise fatal attack with 1 HP remaining.",
      },
      {
        Rank: "9",
        Name: "Protect",
        Description: "Chance to shield Joker from an otherwise fatal attack.",
      },
      {
        Rank: "MAX",
        Name: "Second Awakening",
        Description: "Transforms her Persona into a mythological trickster.",
      },
      {
        Rank: "ROYAL",
        Name: "Second Awakening R",
        Description:
          "Fuse with the mythological Trickster, awakening its true power.",
      },
    ],
    Events: [
      {
        Rank: 1,
        Responses: [
          [
            { Text: "Sounds good. ", Notes: 2 },
            { Text: "	That was our deal. ", Notes: 3 },
            { Text: "	Thanks. I'm counting on you. ", Notes: 2 },
          ],
        ],
      },
      {
        Rank: 2,
        SocialRequired: { Stat: "Proficiency", Level: 5 },
        Responses: [
          [
            { Text: "You like coffee? ", Notes: 3 },
            { Text: "	Are you opening a café? ", Notes: 3 },
            { Text: "	Are you starting a farm? ", Notes: 3 },
          ],
          [
            { Text: "What do you mean? ", Notes: 0 },
            { Text: "	So you won't accept his offer? ", Notes: 0 },
            { Text: "	He sounds suspicious. ", Notes: 3 },
          ],
          [
            { Text: "This is a complex issue. ", Notes: 3 },
            { Text: "	You might be wrong. ", Notes: 3 },
            { Text: "	Maybe you should fire him. ", Notes: 3 },
          ],
          [
            { Text: "Moonlight Carrot. ", Notes: 3 },
            { Text: "	Sun Tomato. ", Notes: 3 },
            { Text: "	Jewel Melon. ", Notes: 3 },
          ],
        ],
      },
      {
        Rank: 3,
        Responses: [
          [
            { Text: "A phantom thief wouldn't worry. ", Notes: 2 },
            { Text: "	They won't find out. ", Notes: 3 },
            { Text: "	It'll be OK, I promise. ", Notes: 3 },
          ],
          [
            { Text: "“I don't want to go with you.” ", Notes: 3 },
            { Text: "	“I'm afraid of flying.” ", Notes: 0 },
            { Text: "	“We should break up.” ", Notes: 0 },
          ],
          [
            { Text: "I have. ", Notes: 3 },
            { Text: "	Not yet. ", Notes: 3 },
            { Text: "	Too many times to count. ", Notes: 3 },
          ],
          [
            { Text: "Smart response. ", Notes: 3 },
            { Text: "	Sounds like a hassle. ", Notes: 0 },
            { Text: "	Which friend? ", Notes: 0 },
          ],
        ],
      },
      {
        Rank: 4,
        Responses: [
          [
            { Text: "That's pricey. ", Notes: 3 },
            { Text: "	What a rip-off. ", Notes: 0 },
            { Text: "	It must be amazing. ", Notes: 3 },
          ],
          [
            { Text: "I can't let you do that. ", Notes: 3 },
            { Text: "	Let me cover the bill. ", Notes: 3 },
            { Text: "	Kthx. ", Notes: 3 },
          ],
          [
            { Text: "You mean… poop!? ", Notes: 3 },
            { Text: "	I can taste the elephant. ", Notes: 3 },
            { Text: "	Excuse me while I vomit. ", Notes: 3 },
          ],
          [
            { Text: "Hands off my cat. ", Notes: 0 },
            { Text: "	I'd rather not think about it. ", Notes: 0 },
            { Text: "	Let's ask him. ", Notes: 3 },
          ],
          [
            { Text: "He seemed nice enough. ", Notes: 0 },
            { Text: "	He was a little sketchy. ", Notes: 0 },
            { Text: "	I'm not really sure. ", Notes: 3 },
          ],
          [
            { Text: "I don't mind. ", Notes: 0 },
            { Text: "	It was rather intriguing. ", Notes: 0 },
            { Text: "	Let's get coffee again sometime. ", Notes: 3 },
          ],
        ],
      },
      {
        Rank: 5,
        Responses: [
          [
            { Text: "Trust who you want to trust. ", Notes: 0 },
            { Text: "	Somebody's telling the truth. ", Notes: 3 },
            { Text: "	Trust no one. ", Notes: 3 },
          ],
          [
            { Text: "Are you really considering it? ", Notes: 0 },
            { Text: "	You can't give in. ", Notes: 0 },
            { Text: "	There has to be another way. ", Notes: 3 },
          ],
          [
            { Text: "That doesn't matter now. ", Notes: 3 },
            { Text: "	You didn't have a choice. ", Notes: 0 },
            { Text: "	I don't think so. ", Notes: 3 },
          ],
          [
            { Text: "Are you okay? ", Notes: 0 },
            { Text: "	We're all here for you. ", Notes: 0 },
            { Text: "	Pinch yourself. ", Notes: 3 },
          ],
        ],
      },
      {
        Rank: 6,
        Responses: [
          [
            { Text: "That's fascinating ", Notes: 3 },
            { Text: "	You're so studious. ", Notes: 3 },
            { Text: "	Can you make some for me? ", Notes: 3 },
          ],
          [
            { Text: "I had no idea. ", Notes: 3 },
            { Text: "	That's a surprise. ", Notes: 0 },
            { Text: "	I could've guessed that. ", Notes: 0 },
          ],
          [
            { Text: "You might be right. ", Notes: 0 },
            { Text: "	That would be bad. ", Notes: 3 },
            { Text: "	Black like coffee? ", Notes: 3 },
          ],
          [
            { Text: "You don't need to apologize. ", Notes: 0 },
            { Text: "	That guy is horrible. ", Notes: 0 },
          ],
          [
            { Text: "You're not powerless. ", Notes: 0 },
            { Text: "	Be strong, Haru. ", Notes: 3 },
          ],
          [
            { Text: "You can talk to me anytime. ", Notes: 3 },
            { Text: "	Let him say what he wants. ", Notes: 3 },
            { Text: "	Wanna run away together? ", Notes: 0 },
          ],
        ],
      },
      {
        Rank: 7,
        Responses: [
          [
            { Text: "You look exhausted. ", Notes: 0 },
            { Text: "	Don't overwork yourself. ", Notes: 0 },
            { Text: "	Let's go see the nurse. ", Notes: 0 },
          ],
          [
            { Text: "That sounds really tough… ", Notes: 3 },
            { Text: "	You should ask some employees. ", Notes: 0 },
            { Text: "	What do you want to do? ", Notes: 3 },
          ],
          [
            { Text: "hat does Takakura-san think? ", Notes: 3 },
            { Text: "	There has to be a way. ", Notes: 3 },
            { Text: "	You should tell him that. ", Notes: 3 },
          ],
          [
            { Text: "That's the spirit. ", Notes: 3 },
            { Text: "	You can do it, Haru. ", Notes: 3 },
          ],
          [
            { Text: "Don't relax yet. ", Notes: 0 },
            { Text: "	I'll always have your back. ", Notes: 3 },
            { Text: "	So what's this “magic item”? ", Notes: 0 },
          ],
        ],
      },
      {
        Rank: 8,
        Responses: [
          [
            { Text: "The soil? ", Notes: 3 },
            { Text: "	The planters? ", Notes: 0 },
            { Text: "	That beetle over there? ", Notes: 0 },
          ],
          [
            { Text: "It'll help him understand you. ", Notes: 3 },
            { Text: "	He's going to love it. ", Notes: 3 },
            { Text: "	He might not like it. ", Notes: 3 },
          ],
          [
            { Text: "I'll be cheering for you. ", Notes: 3 },
            { Text: "	You're amazing, Haru. ", Notes: 3 },
            { Text: "	Are you sure you can do it? ", Notes: 3 },
          ],
          [
            { Text: "You can understand them? ", Notes: 0 },
            { Text: "	It's in your nature to nurture. ", Notes: 3 },
            { Text: "	I want some too. ", Notes: 3 },
          ],
        ],
      },
      {
        Rank: 9,
        Responses: [
          [
            { Text: "Don't forget to breathe. ", Notes: 0 },
            { Text: "	Believe in yourself. ", Notes: 0 },
            { Text: "	I'm here for you, Haru. ", Notes: 0 },
          ],
          [
            { Text: "I'm sure you'll do great. ", Notes: 3 },
            { Text: "	It'll be fine. ", Notes: 3 },
            { Text: "	Give it all you've got, Haru. ", Notes: 3 },
          ],
          [
            { Text: "You're very welcome. ", Notes: 3 },
            { Text: "	You did amazing. ", Notes: 3 },
            { Text: "	Do I get a reward? ", Notes: 0 },
          ],
          [
            { Text: "He saw us as good friends. ", Notes: 0 },
            { Text: "	I like you too, Haru. ", Notes: 0, Romance: true },
          ],
          [
            { Text: "What're you up to? ", Notes: 0 },
            { Text: "	I wanted to hear your voice. ", Notes: 3 },
            { Text: "	I miss you. ", Notes: 3 },
          ],
        ],
      },
      {
        Rank: 10,
        RomanceRequired: true,
        Responses: [
          [
            { Text: "Will things be OK? ", Notes: 0 },
            { Text: "	That's good to hear. ", Notes: 3 },
            { Text: "	You've done great, Haru. ", Notes: 3 },
          ],
          [
            { Text: "I'm sure you'll succeed. ", Notes: 3 },
            { Text: "	This won't be easy. ", Notes: 3 },
            { Text: "	It all comes down to flavor. ", Notes: 3 },
          ],
          [
            { Text: "If you want. ", Notes: 0 },
            { Text: "	Probably not. ", Notes: 0 },
            { Text: "	It's hard work, you know. ", Notes: 0 },
          ],
          [
            { Text: "I'm glad too. ", Notes: 3 },
            { Text: "	Don't deny yourself. ", Notes: 3 },
            { Text: "	Just my teammate? ", Notes: 3 },
          ],
        ],
      },
    ],
  },
  {
    Name: "Yoshizawa",
    Arcana: "Faith",
    Icon: FaithIcon,
    Benefits: [
      {
        Rank: "2",
        Name: "Tumbling",
        Description: "Allows you to avoid being surround by enemies in Palaces",
      },
      {
        Rank: "4",
        Name: "Chaines Hook",
        Description:
          "Allows you to ambush from a distance by attacking with the grappling hook.",
      },
      {
        Rank: "6",
        Name: "Follow Up",
        Description:
          "Chance to perform a follow-up attack if Joker’s attack does not down the enemy.",
      },
      {
        Rank: "6",
        Name: "Fitness Talk",
        Description:
          "If negotiation with any kind of Shadow fails, you can try again.",
      },
      {
        Rank: "7",
        Name: "Harisen Recovery",
        Description:
          "Chance to cure status ailments inflicted upon party members.",
      },
      {
        Rank: "8",
        Name: "Endure",
        Description:
          "Chance to withstand an otherwise fatal attack with 1 HP remaining.",
      },
      {
        Rank: "9",
        Name: "Protect",
        Description: "Chance to shield Joker from an otherwise fatal attack.",
      },
      {
        Rank: "MAX",
        Name: "Second Awakening",
        Description: "Transforms Person into a mythological trickster.",
      },
      {
        Rank: "ROYAL",
        Name: "Second Awakening R",
        Description:
          "Fuse with the mythological Trickster, awakening its true power.",
      },
    ],
    Events: [
      {
        Rank: 2,
        Responses: [
          [
            { Text: "We're just getting started. ", Notes: 2 },
            { Text: "	Go easy on me. ", Notes: 0 },
            { Text: "	I'm so done with this. ", Notes: 2 },
          ],
          [
            { Text: "Next time, then. ", Notes: 2 },
            { Text: "	You doing okay? ", Notes: 0 },
            { Text: "	Lucky for me… ", Notes: 0 },
          ],
          [
            { Text: "I see. ", Notes: 0 },
            { Text: "	So now…? ", Notes: 0 },
          ],
          [
            { Text: "No problem. ", Notes: 0 },
            { Text: "	You sure? ", Notes: 0 },
            { Text: "	Uh, romantically? ", Notes: 0 },
          ],
          [
            { Text: "Leave it to me. ", Notes: 0 },
            { Text: "	Let's give it a try. ", Notes: 0 },
            { Text: "	Then follow my lead. ", Notes: 0 },
          ],
          [
            { Text: "Impressive. ", Notes: 2 },
            { Text: "	Gotta push through it. ", Notes: 0 },
            { Text: "	You did eat eventually, right? ", Notes: 0 },
          ],
        ],
      },

      {
        Rank: 3,
        Responses: [
          [
            { Text: "Making bento? ", Notes: 3 },
            { Text: "	Potluck parties? ", Notes: 0 },
            { Text: "	“This” being…? ", Notes: 0 },
          ],
          [
            { Text: "I'm touched! ", Notes: 2 },
            { Text: "	It looks delicious. ", Notes: 2 },
            { Text: "	Let's see if it's good… ", Notes: 0 },
          ],
          [
            { Text: "Is that all for you? ", Notes: 3 },
            { Text: "	That seems a little much. ", Notes: 2 },
            { Text: "	What IS that? ", Notes: 0 },
          ],
          [
            { Text: "This tastes like… ", Notes: 0 },
            { Text: "	It's definitely unique. ", Notes: 2 },
            { Text: "	It's… greeeaaat… ", Notes: 0 },
          ],
          [
            { Text: "Not exactly. ", Notes: 0 },
            { Text: "	Is there a third option…? ", Notes: 0 },
          ],
          [
            { Text: "Calm down. ", Notes: 0 },
            { Text: "	You're going to get it now? ", Notes: 0 },
          ],
          [
            { Text: "This works fine as is. ", Notes: 0 },
            { Text: "	I'm enjoying this. ", Notes: 0 },
            { Text: "	Let's just eat. ", Notes: 0 },
          ],
          [
            { Text: "You could try again sometime? ", Notes: 3 },
            { Text: "	It happens. ", Notes: 3 },
            { Text: "	Just keep at it. ", Notes: 3 },
          ],
          [
            { Text: "That sounds right. ", Notes: 0 },
            { Text: "	Maybe… ", Notes: 0 },
          ],
        ],
      },
      {
        Rank: 4,
        Responses: [
          [
            { Text: "You have bad eyesight? ", Notes: 0 },
            { Text: "	You're looking to buy? ", Notes: 2 },
            { Text: "	I have enough glasses. ", Notes: 0 },
          ],
          [
            { Text: "A pretty modern look. ", Notes: 3 },
            { Text: "	Not my style. ", Notes: 0 },
            { Text: "	I look so aloof in these. ", Notes: 2 },
          ],
          [
            {
              Text: "Do they suit your dad, though? =0	I'm not so sure… ",
              Notes: 0,
            },
          ],
          [
            { Text: "Of course. ", Notes: 2 },
            { Text: "	Let's keep going. ", Notes: 2 },
            { Text: "	Sure, whatever. ", Notes: 0 },
          ],
          [
            { Text: "Trust your instincts. ", Notes: 0 },
            { Text: "	Don't overthink it. ", Notes: 0 },
          ],
          [
            { Text: "Good choice. ", Notes: 2 },
            { Text: "	I'm sure he'll love it. ", Notes: 0 },
          ],
          [
            { Text: "It's part of our deal. ", Notes: 0 },
            { Text: "	Not a problem at all. ", Notes: 0 },
            { Text: "	I expect compensation. ", Notes: 0 },
          ],
          [
            { Text: "Everyone deals with that. ", Notes: 2 },
            { Text: "	That's your slump talking. ", Notes: 0 },
          ],
          [
            { Text: "Good luck. ", Notes: 0 },
            { Text: "	We'll work at it together. ", Notes: 2 },
            { Text: "	No rush, though. ", Notes: 0 },
          ],
          [
            { Text: "I'm glad to hear that. ", Notes: 2 },
            { Text: "	You should  be more confident. ", Notes: 2 },
            { Text: "	Of course he is. ", Notes: 0 },
          ],
        ],
      },
      {
        Rank: 5,
        Responses: [
          [
            { Text: "It's a surprise, yea. ", Notes: 2 },
            { Text: "	Not at all. ", Notes: 0 },
            { Text: "	What are you scheming? ", Notes: 0 },
          ],
          [
            { Text: "This seems kind of sudden. ", Notes: 0 },
            { Text: "	If I'm just watching… ", Notes: 0 },
          ],
          [
            { Text: "It's a good idea. ", Notes: 2 },
            { Text: "	Go ahead. I'll watch. ", Notes: 3 },
            { Text: "	Maybe stick to gymnastics. ", Notes: 0 },
          ],
          [
            { Text: "Don't give up. ", Notes: 0 },
            { Text: "	Just don't lose hope. ", Notes: 0 },
            { Text: "	You can beat this, right? ", Notes: 0 },
          ],
          [
            { Text: "Congratulations. ", Notes: 3 },
            { Text: "	I saw! ", Notes: 3 },
            { Text: "	How's that feel? ", Notes: 2 },
          ],
          [
            { Text: "That's important. ", Notes: 3 },
            { Text: "	Don't forget how that feels. ", Notes: 2 },
          ],
          [
            { Text: "Nicely done. ", Notes: 0 },
            { Text: "	It's not over yet. ", Notes: 0 },
          ],
          [
            { Text: "Swimming. ", Notes: 3 },
            { Text: "	Running. ", Notes: 2 },
            { Text: "	Gymnastics. ", Notes: 3 },
          ],
        ],
      },
      {
        Rank: 6,
        Responses: [
          [
            { Text: "It wasn't on purpose. ", Notes: 0 },
            { Text: "	What could you have done? ", Notes: 0 },
            { Text: "	At least you realize it now. ", Notes: 0 },
          ],
          [
            { Text: "Don't beat yourself up. ", Notes: 0 },
            { Text: "	What'll you do now? ", Notes: 0 },
            { Text: "	Calm down. ", Notes: 0 },
          ],
          [
            { Text: "You two were close, then. ", Notes: 0 },
            { Text: "	Those must be good memories. ", Notes: 0 },
            { Text: "	All for ice cream, huh? ", Notes: 0 },
          ],
          [
            { Text: "… That IS genius. ", Notes: 0 },
            { Text: "	How old was she again? ", Notes: 0 },
          ],
          [
            { Text: "She cared about you. ", Notes: 0 },
            { Text: "	Sounds like tough training. ", Notes: 0 },
          ],
          [
            { Text: "Why? ", Notes: 0 },
            { Text: "	I can imagine. ", Notes: 0 },
          ],
          [
            { Text: "It must have been hard. ", Notes: 0 },
            { Text: "	What about Kasumi's feelings? ", Notes: 0 },
            { Text: "	Sounds like running away. ", Notes: 0 },
          ],
          [
            { Text: "You have to accept it. ", Notes: 0 },
            { Text: "	Try not to think about it. ", Notes: 0 },
            { Text: "	So what happens now? ", Notes: 0 },
          ],
          [
            { Text: "I will. ", Notes: 0 },
            { Text: "	I can manage that. ", Notes: 0 },
            { Text: "	If it's part of the deal. ", Notes: 0 },
          ],
          [
            { Text: "Do you want to run away? ", Notes: 0 },
            { Text: "	You have to face it. ", Notes: 3 },
            { Text: "	So what if it is? ", Notes: 3 },
          ],
        ],
      },
      {
        Rank: 7,
        Responses: [
          [
            { Text: "Maybe. ", Notes: 0 },
            { Text: "	Who Knows? ", Notes: 0 },
            { Text: "	Were you frustrated? ", Notes: 0 },
          ],
          [
            { Text: "Is she scary? ", Notes: 0 },
            { Text: "	Is she strict? ", Notes: 0 },
          ],
          [
            { Text: "You okay? ", Notes: 3 },
            { Text: "	That was a big sigh. ", Notes: 0 },
            { Text: "	She's a real taskmaster. ", Notes: 0 },
          ],
          [
            { Text: "That isn't true. ", Notes: 3 },
            { Text: "	You need more confidence. ", Notes: 0 },
            { Text: "	That's just a mental block. ", Notes: 0 },
          ],
          [
            { Text: "It'll be like a duet. ", Notes: 0 },
            { Text: "	You'll become stronger. ", Notes: 0 },
          ],
          [
            { Text: "Of course. ", Notes: 3 },
            { Text: "	I could watch you forever. ", Notes: 3 },
            { Text: "	Another love confession? ", Notes: 3 },
          ],
          [
            { Text: "I was internally screaming. ", Notes: 0 },
            { Text: "	Yeah, it was a breeze. ", Notes: 0 },
            { Text: "	I love a good challenge. ", Notes: 3 },
          ],
        ],
      },
      {
        Rank: 8,
        Responses: [
          [
            { Text: "Walk up to Sumire. ", Notes: 3 },
            { Text: "	Watch her from a distance. ", Notes: 0 },
            { Text: "	Slowly walk away. ", Notes: 0 },
          ],
          [
            { Text: "Look at yourself. ", Notes: 0 },
            { Text: "	You're just standing out. ", Notes: 0 },
          ],
          [
            { Text: "Try to stay positive. ", Notes: 3 },
            { Text: "	I'm here for you. ", Notes: 3 },
            { Text: "	It'll work out. ", Notes: 3 },
          ],
          [
            { Text: "What is it? ", Notes: 0 },
            { Text: "	…… ", Notes: 0 },
          ],
          [
            { Text: "You started it. ", Notes: 0 },
            { Text: "	What, I can't look at you? ", Notes: 0 },
          ],
          [
            { Text: "It looks great. ", Notes: 3 },
            { Text: "	You look really cute. ", Notes: 3 },
            { Text: "	I'm in love. ", Notes: 3 },
          ],
          [
            { Text: "Did I help? ", Notes: 0 },
            { Text: "	You found your answer? ", Notes: 0 },
          ],
          [
            { Text: "I see… ", Notes: 0 },
            { Text: "	So that's how it was. ", Notes: 0 },
          ],
          [
            { Text: "That's how it should be. ", Notes: 3 },
            { Text: "	Sounds like progress. ", Notes: 3 },
          ],
          [
            { Text: "The airsoft shop. ", Notes: 0 },
            { Text: "	The resale shop. ", Notes: 3 },
            { Text: "	Online. ", Notes: 3 },
          ],
        ],
      },
      {
        Rank: 9,
        Responses: [
          [
            { Text: "It's no problem. ", Notes: 3 },
            { Text: "	We'll call it holiday hours. ", Notes: 3 },
          ],
          [
            { Text: "Definitely. ", Notes: 3 },
            { Text: "	Of course. ", Notes: 3 },
          ],
          [
            { Text: "Of course I do. ", Notes: 3 },
            { Text: "	Vaguely… ", Notes: 0 },
            { Text: "	What about it? ", Notes: 0 },
          ],
          [
            { Text: "I know you did. ", Notes: 3 },
            { Text: "	You're not worthless. ", Notes: 3 },
            { Text: "	This is a new beginning. ", Notes: 3 },
          ],
          [
            { Text: "What's going on? ", Notes: 0 },
            { Text: "	There's something else? ", Notes: 0 },
            { Text: "	Go ahead. ", Notes: 3 },
          ],
          [
            { Text: "What? ", Notes: 0 },
            { Text: "	In luh? ", Notes: 0 },
          ],
          [
            { Text: "Let's stay friends, okay? ", Notes: 0 },
            { Text: "	I love you too. ", Notes: 0, Romance: true },
          ],
          [
            { Text: "Calm down. ", Notes: 3 },
            { Text: "	Take your time. ", Notes: 3 },
          ],
          [
            { Text: "So? Any different? ", Notes: 3 },
            { Text: "	You are so red right now. ", Notes: 3 },
            { Text: "	You're so cute. ", Notes: 3 },
          ],
          [
            { Text: "Get used to it. ", Notes: 3 },
            { Text: "	Should I hang up…? ", Notes: 0 },
            { Text: "	That's just how it is. ", Notes: 0 },
          ],
        ],
      },
      {
        Rank: 10,
        RomanceRequired: true,
        Responses: [
          [
            { Text: "You look radiant today. ", Notes: 0 },
            { Text: "	Now I'm getting nervous. ", Notes: 0 },
          ],
          [
            { Text: "It's all Sumire. ", Notes: 0 },
            { Text: "	Just watch. ", Notes: 0 },
          ],
          [
            { Text: "Calm down. ", Notes: 0 },
            { Text: "	Don't rush it. ", Notes: 0 },
          ],
          [
            { Text: "You must be happy. ", Notes: 0 },
            { Text: "	I'm so relieved. ", Notes: 0 },
            { Text: "	It's only natural, Sumire. ", Notes: 0 },
          ],
          [
            { Text: "And that is…? ", Notes: 3 },
            { Text: "	What do you mean? ", Notes: 3 },
            { Text: "	Is it someone you love? ", Notes: 3 },
          ],
          [
            { Text: "And there's more to come. ", Notes: 0 },
            { Text: "	You were amazing out there. ", Notes: 0 },
          ],
          [
            { Text: "I'll stop if you want. ", Notes: 0 },
            { Text: "	I feel the same way. ", Notes: 0 },
            { Text: "	I don't want to let you go. ", Notes: 0 },
          ],
          [
            { Text: "I'm counting on you. ", Notes: 3 },
            { Text: "	Don't get ahead of yourself. ", Notes: 3 },
            { Text: "	We're our world's champions. ", Notes: 3 },
          ],
        ],
      },
    ],
  },
  {
    Name: "Mifune",
    Arcana: "Fortune",
    Icon: FortuneIcon,
    Benefits: [
      {
        Rank: "1",
        Name: "Lucky Reading",
        Description:
          "Temporarily increases the growth rate of a selected social stat.",
      },
      {
        Rank: "3",
        Name: "Money Reading",
        Description: "Temporarily increases money earned from battle.",
      },
      {
        Rank: "5",
        Name: "Affinity Reading",
        Description: "Deepens your bond with a Confidant of your choice.",
      },
      {
        Rank: "7",
        Name: "Special Fate Reading",
        Description:
          "Provides a preview of all abilities for a Confidant of your choice.",
      },
      {
        Rank: "8",
        Name: "Celestial Reading",
        Description:
          "Triggers a Fusion Alarm, then raising alarm chances until end of day.",
      },
      {
        Rank: "MAX",
        Name: "Special Bond Reading",
        Description:
          "Displays the responses that grant the highest points during Confidant events.",
      },
    ],
    Events: [
      {
        Rank: 1,
        Responses: [
          [
            { Text: "I'll be there. ", Notes: 3 },
            { Text: "	Such a hassle. ", Notes: 1 },
            { Text: "	You're pretty extreme… ", Notes: 1 },
          ],
        ],
      },
      {
        Rank: 2,
        Responses: [
          [
            { Text: "Suggest she gives up.", Notes: 0 },
            { Text: "	Change her boss's heart.", Notes: 0 },
            { Text: "	Encourage her. ", Notes: 0 },
          ],
          [
            { Text: "Hrahhh! ", Notes: 0 },
            { Text: "	Overturn your fate! ", Notes: 0 },
            { Text: "	Fight the power! ", Notes: 0 },
          ],
          [
            { Text: "You're so stubborn ", Notes: 0 },
            { Text: "	Open your mind to change. ", Notes: 2 },
          ],
          [
            { Text: "Of course I am. ", Notes: 2 },
            { Text: "	And if I am? ", Notes: 0 },
            { Text: "	Are you stalking me? ", Notes: 0 },
          ],
        ],
      },
      {
        Rank: 3,
        Responses: [
          [
            { Text: "Go for the money. ", Notes: 0 },
            { Text: "	Follow his heart. ", Notes: 0 },
            { Text: "	Chase a promotion. ", Notes: 0 },
          ],
          [
            { Text: "Thieves may steal her away. ", Notes: 0 },
            { Text: "	Marriage kills individuality. ", Notes: 0 },
            { Text: "	She'll be sad if you break it off. ", Notes: 0 },
          ],
          [
            { Text: "I'm not, sorry. ", Notes: 0 },
            { Text: "	Who knows…? ", Notes: 0 },
          ],
        ],
      },
      {
        Rank: 4,
        Responses: [
          [
            { Text: "You're only realizing that now? ", Notes: 0 },
            { Text: "	Do you want to test it again? ", Notes: 0 },
          ],
          [
            { Text: "Strengthen your will. ", Notes: 2 },
            { Text: "	I don't know. ", Notes: 0 },
            { Text: "	Trust in yourself. ", Notes: 3 },
          ],
          [
            { Text: "Tell me more. ", Notes: 0 },
            { Text: "	That sounds so peaceful. ", Notes: 0 },
          ],
          [
            { Text: "…The chairman? ", Notes: 0 },
            { Text: "	I'm not sure I follow. ", Notes: 0 },
          ],
          [
            { Text: "I think it'll work. ", Notes: 0 },
            { Text: "	It all depends on you. ", Notes: 0 },
          ],
          [
            { Text: "I'm glad to hear that. ", Notes: 0 },
            { Text: "	I didn't do much. ", Notes: 2 },
            { Text: "	Tell me more about your home. ", Notes: 0 },
          ],
        ],
      },
      {
        Rank: 5,
        Responses: [
          [
            { Text: "You're such a hard worker. ", Notes: 3 },
            { Text: "	What about divine power? ", Notes: 0 },
            { Text: "	You must have lots of free time. ", Notes: 2 },
          ],
          [
            { Text: "But what? ", Notes: 0 },
            { Text: "	Did you spend it all? ", Notes: 0 },
          ],
          [
            { Text: "Who was he? ", Notes: 0 },
            { Text: "	Maiden? ", Notes: 0 },
            { Text: "	Are you in trouble? ", Notes: 0 },
          ],
        ],
      },
      {
        Rank: 6,
        Responses: [
          [
            { Text: "I like fortune-telling. ", Notes: 0 },
            { Text: "	She's really cool. ", Notes: 0 },
            { Text: "	I'm doing research for school. ", Notes: 0 },
          ],
          [
            { Text: "…Maiden of Relief? ", Notes: 0 },
            { Text: "	This has to be a joke. ", Notes: 0 },
          ],
          [
            { Text: "This guy's sketchy. ", Notes: 0 },
            { Text: "	Leave her alone. ", Notes: 0 },
          ],
          [
            { Text: "What's a Maiden of Relief? ", Notes: 0 },
            { Text: "	Who thinks you're a monster? ", Notes: 0 },
            { Text: "	You're just Chihaya to me. ", Notes: 3 },
          ],
          [
            { Text: "No need to strain yourself. ", Notes: 0 },
            { Text: "	Be honest with yourself. ", Notes: 2 },
            { Text: "	We'll work on it together. ", Notes: 0 },
          ],
        ],
      },
      {
        Rank: 7,
        Responses: [
          [
            { Text: "You're not wrong about that. ", Notes: 0 },
            { Text: "	You shouldn't have tricked them. ", Notes: 2 },
            { Text: "	I don't think so. ", Notes: 3 },
          ],
          [
            { Text: "Are you gonna be okay? ", Notes: 2 },
            { Text: "	Be careful. ", Notes: 2 },
            { Text: "	So the Maiden's taking action. ", Notes: 0 },
          ],
        ],
      },
      {
        Rank: 7.5,
        Responses: [
          [
            { Text: "How so? ", Notes: 0 },
            { Text: "	What have you found? ", Notes: 0 },
          ],
          [
            { Text: "Tell me his name. ", Notes: 0 },
            { Text: "	What's Fukurai's first name? ", Notes: 0 },
          ],
          [
            { Text: "I can't tell you. ", Notes: 0 },
            { Text: "	Don't worry about it. ", Notes: 0 },
          ],
        ],
      },
      {
        Rank: 8,
        Responses: [
          [
            { Text: "I had no idea. ", Notes: 2 },
            { Text: "	I know. ", Notes: 3 },
          ],
          [
            { Text: "I'm glad to hear that. ", Notes: 3 },
            { Text: "	That's some good luck. ", Notes: 3 },
            { Text: "	It's because you're strong. ", Notes: 3 },
          ],
          [
            { Text: "Why do you ask? ", Notes: 0 },
            { Text: "	Hell yeah I am. ", Notes: 3 },
          ],
          [
            { Text: "You give me too much credit. ", Notes: 0 },
            { Text: "	It was all your own will. ", Notes: 2 },
            { Text: "	I knew it would happen. ", Notes: 0 },
          ],
        ],
      },
      {
        Rank: 9,
        Responses: [
          [
            { Text: "You really don't understand. ", Notes: 0 },
            { Text: "	Listen to what Chihaya's saying. ", Notes: 0 },
          ],
          [
            { Text: "Do you regret what you did? ", Notes: 0 },
            { Text: "	Well, fate can be changed. ", Notes: 3 },
            { Text: "	That's all in the past now. ", Notes: 2 },
          ],
          [
            { Text: "I like having my fortune read. ", Notes: 0 },
            { Text: "	So I can be with you. ", Notes: 0, Romance: true },
          ],
          [
            { Text: "I wanted to hear your voice too. ", Notes: 2 },
            { Text: "	Oh, you didn't mean it…? ", Notes: 0 },
            { Text: "	….. ", Notes: 0 },
          ],
        ],
      },
      {
        Rank: 10,
        RomanceRequired: true,
        Responses: [
          [
            { Text: "You've never been here? ", Notes: 0 },
            { Text: "	It wasn't that far away. ", Notes: 0 },
          ],
          [
            { Text: "I support you. ", Notes: 3 },
            { Text: "	You have strong convictions. ", Notes: 3 },
          ],
          [
            { Text: "I wonder if you're right… ", Notes: 0 },
            { Text: "	So what if I am the Trickster? ", Notes: 0 },
            { Text: "	You're pretty sharp. ", Notes: 0 },
          ],
          [
            { Text: "It's not a problem. ", Notes: 0 },
            { Text: "	Are you worried about me? ", Notes: 0 },
            { Text: "	What does it mean? ", Notes: 0 },
          ],
          [
            { Text: "Thank you.", Notes: 0 },
            { Text: "	That's really reassuring. ", Notes: 0 },
          ],
          [
            { Text: "I don't care about that. ", Notes: 2 },
            { Text: "	It's actually pretty cute. ", Notes: 3 },
          ],
          [
            { Text: "I was hoping you'd say that. ", Notes: 0 },
            { Text: "	I don't want to go home. ", Notes: 0 },
          ],
        ],
      },
    ],
  },
  {
    Name: "Iwai",
    Arcana: "Hanged",
    Icon: HangedIcon,
    Benefits: [
      {
        Rank: "1",
        Name: "Starter Customization",
        Description: "Allows you to customize your gun and install upgrades.",
      },
      {
        Rank: "3",
        Name: "Camo Customization",
        Description:
          "Allows you to customize camouflage on you gun, which can inflict ailments.",
      },
      {
        Rank: "5",
        Name: "Discount",
        Description: "Decreases the cost of gun customization.",
      },
      {
        Rank: "7",
        Name: "Expert Customization",
        Description: "Unlocks more parts for customization.",
      },
      {
        Rank: "MAX",
        Name: "On The House",
        Description: "Allows you to customize your gun for free.",
      },
    ],
    Events: [
      {
        Rank: 1,
        SocialRequired: { Stat: "Guts", Level: 4 },
        Responses: [
          [
            { Text: "Leave it to me. ", Notes: 1 },
            { Text: "	As long as it’s safe… ", Notes: 1 },
            { Text: "	So what’s my first job? ", Notes: 3 },
          ],
        ],
      },
      {
        Rank: 2,
        Responses: [
          [
            { Text: "Maybe I should call him. ", Notes: 0 },
            { Text: "	… Iwai seems sick. ", Notes: 0 },
          ],
          [
            { Text: "Nothing in particular. ", Notes: 0 },
            { Text: "	I was daydreaming, sorry. ", Notes: 0 },
          ],
          [
            { Text: "Who was that guy? ", Notes: 0 },
            { Text: "	What should I do now? ", Notes: 2 },
            { Text: "	How’s your cold? ", Notes: 2 },
          ],
        ],
      },
      {
        Rank: 3,
        Responses: [
          [
            { Text: "I know how it feels. ", Notes: 0 },
            { Text: "	Is it seriously that hard? ", Notes: 0 },
          ],
          [
            { Text: "I always knew you were a thug. ", Notes: 3 },
            { Text: "	Oh. I, uh… have to go. ", Notes: 0 },
            { Text: "	Y-Yakuza!? ", Notes: 2 },
          ],
          [
            { Text: "Not really. ", Notes: 0 },
            { Text: "	No, I like that stuff. ", Notes: 0 },
            { Text: "	We made a deal, didn’t we? ", Notes: 3 },
          ],
          [
            { Text: "Is that one of your customers? ", Notes: 0 },
            { Text: "	Why are you being so mean? ", Notes: 0 },
          ],
        ],
      },
      {
        Rank: 4,
        Responses: [
          [
            { Text: "Iwai. ", Notes: 0 },
            { Text: "	I can’t tell you. ", Notes: 0 },
            { Text: "	It’s none of your business. ", Notes: 0 },
          ],
          [
            { Text: "What was that about? ", Notes: 0 },
            { Text: "	So that was Tsuda? ", Notes: 0 },
            { Text: "	What did he mean, “sell” him? ", Notes: 0 },
          ],
          [
            { Text: "Hong Kong mafia. ", Notes: 0 },
            { Text: "	A 100 million yen deal. ", Notes: 0 },
          ],
          [
            { Text: "Give it your all. ", Notes: 0 },
            { Text: "	You two should play nice. ", Notes: 2 },
            { Text: "	Where’s my reward. ", Notes: 3 },
          ],
          [
            { Text: "I agree. ", Notes: 2 },
            { Text: "	Is that a threat? ", Notes: 0 },
            { Text: "	What’s the issue? ", Notes: 0 },
          ],
        ],
      },
      {
        Rank: 5,
        Responses: [
          [
            { Text: "Why not? ", Notes: 0 },
            { Text: "	You shouldn’t lie to your son. ", Notes: 0 },
          ],
          [
            { Text: "You’re so kind, Iwai. ", Notes: 0 },
            { Text: "	You’re pathetic. ", Notes: 3 },
            { Text: "	You should call the cops. ", Notes: 0 },
          ],
          [
            { Text: "That’s right. ", Notes: 2 },
            { Text: "	Don’t make assumptions. ", Notes: 0 },
            { Text: "	I’ll stick around for the guns. ", Notes: 3 },
          ],
          [
            { Text: "You’re right. ", Notes: 2 },
            { Text: "	Is it really all for Kaoru? ", Notes: 0 },
            { Text: "	Well, you got this. ", Notes: 0 },
          ],
        ],
      },
      {
        Rank: 6,
        Responses: [
          [
            { Text: "Why would he say that? ", Notes: 0 },
            { Text: "	No, nothing even close. ", Notes: 0 },
          ],
          [
            { Text: "He definitely does. ", Notes: 0 },
            { Text: "	You should ask him. ", Notes: 0 },
          ],
          [
            { Text: "Our futures. ", Notes: 2 },
            { Text: "	Girls. ", Notes: 3 },
            { Text: "	That’s a secret. ", Notes: 3 },
          ],
          [
            { Text: "Right. ", Notes: 2 },
            { Text: "	You should tell him, Iwai. ", Notes: 0 },
            { Text: "	You should buy us something. ", Notes: 3 },
          ],
          [
            { Text: "He’s my age, so it comes easier. ", Notes: 2 },
            { Text: "	All I did was listen to him. ", Notes: 2 },
            { Text: "	It’s part of the job. ", Notes: 0 },
          ],
        ],
      },
      {
        Rank: 7,
        Responses: [
          [
            { Text: "Not at all. ", Notes: 0 },
            { Text: "	Absolutely. ", Notes: 3 },
            { Text: "	I guess he likes guns? ", Notes: 2 },
          ],
          [
            { Text: "That’s horrible. ", Notes: 0 },
            { Text: "	He’s clever. ", Notes: 3 },
            { Text: "	What a crafty bastard. ", Notes: 2 },
          ],
          [
            { Text: "Is Tsuda seriously dangerous? ", Notes: 0 },
            { Text: "	Are you going alone? ", Notes: 0 },
          ],
          [
            { Text: "Bring it on. ", Notes: 2 },
            { Text: "	I’m worried… ", Notes: 0 },
            { Text: "	So what’s our first move? ", Notes: 0 },
          ],
        ],
      },
      {
        Rank: 7.5,
        SocialRequired: { Stat: "Guts", Level: 5 },
        Responses: [
          [
            { Text: "It most definitely was. ", Notes: 2 },
            { Text: "	I did it all for Iwai. ", Notes: 3 },
            { Text: "	Actually, it’s been fun. ", Notes: 0 },
          ],
          [
            { Text: "I will. ", Notes: 2 },
            { Text: "	I want to help you. ", Notes: 2 },
            { Text: "	I can’t. ", Notes: 0 },
          ],
          [
            { Text: "What’s his full name? ", Notes: 0 },
            { Text: "	Tell me his name. ", Notes: 0 },
          ],
        ],
      },
      {
        Rank: 8,
        Responses: [
          [
            { Text: "It’s not impossible. ", Notes: 0 },
            { Text: "	I dunno. ", Notes: 2 },
            { Text: "	He’s matured. ", Notes: 0 },
          ],
          [
            { Text: "I’m back, baby. ", Notes: 2 },
            { Text: "	I guess I could consider it. ", Notes: 3 },
            { Text: "	If you pay me well. ", Notes: 3 },
          ],
          [
            { Text: "Understood. ", Notes: 2 },
            { Text: "	You worry too much. ", Notes: 0 },
            { Text: "	Now let’s catch him off-guard. ", Notes: 0 },
          ],
        ],
      },
      {
        Rank: 9,
        Responses: [
          [
            { Text: "That’s great news. ", Notes: 2 },
            { Text: "	I feel bad for him. ", Notes: 0 },
            { Text: "	Are you sure he’s alive? ", Notes: 3 },
          ],
          [
            { Text: "Who’s Masa? ", Notes: 0 },
            { Text: "	Will Karou be OK? ", Notes: 0 },
          ],
          [
            { Text: "We should hurry. ", Notes: 0 },
            { Text: "	Let’s close up shop. ", Notes: 0 },
          ],
          [
            { Text: "What’s your goal here, Masa? ", Notes: 0 },
            { Text: "	Cut the bullshit. ", Notes: 0 },
          ],
          [
            { Text: "Tell him the truth. ", Notes: 3 },
            { Text: "	You need to trust your son. ", Notes: 3 },
          ],
          [
            { Text: "Karou is really strong-willed. ", Notes: 3 },
            { Text: "	He gets that maturity from you. ", Notes: 2 },
            { Text: "	He’s a cool kid, huh? ", Notes: 3 },
          ],
          [
            { Text: "Like father, like son. ", Notes: 2 },
            { Text: "	Gecko bonds go beyond blood. ", Notes: 2 },
            { Text: "	Why not newts? ", Notes: 0 },
          ],
        ],
      },
      {
        Rank: 10,
        Responses: [
          [
            { Text: "It’s up to you now, Iwai. ", Notes: 3 },
            { Text: "	Kaoru won’t lose. ", Notes: 3 },
            { Text: "	Iwai’s kind of slow. ", Notes: 0 },
          ],
          [
            { Text: "I couldn’t leave him. ", Notes: 0 },
            { Text: "	It was for the special menu. ", Notes: 0 },
          ],
          [
            { Text: "It’s a coincidence. ", Notes: 0 },
            { Text: "	Should we close up? ", Notes: 0 },
            { Text: "	What if you’re right? ", Notes: 2 },
          ],
        ],
      },
    ],
  },
  {
    Name: "Futaba",
    Arcana: "Hermit",
    Icon: HermitIcon,
    Benefits: [
      {
        Rank: "1",
        Name: "Moral Support",
        Description:
          "Chance to cast Kaja or party-healing magic during battle.",
      },
      {
        Rank: "2",
        Name: "Mementos Scan",
        Description:
          "Chance to fully map the floor of Mementos when entering that floor.",
      },
      {
        Rank: "4",
        Name: "Position Hack",
        Description:
          "Chance to instantly Hold Up enemies when starting a battle.",
      },
      {
        Rank: "6",
        Name: "Active Support",
        Description: "Moral Support may now Charge or recover SP.",
      },
      {
        Rank: "7",
        Name: "Treasure Reboot",
        Description:
          "Chance to revive search objects in the area after battle.",
      },
      {
        Rank: "9",
        Name: "Emergency Shift",
        Description:
          "Chance to swap current party with backups when 2 or more people are KO’d.",
      },
      {
        Rank: "MAX",
        Name: "Final Guard",
        Description:
          "Chance to nullify a fatal attack to a current party member.",
      },
      {
        Rank: "MAX",
        Name: "Second Awakening",
        Description: "Transforms her Persona into a mythological trickster.",
      },
      {
        Rank: "ROYAL",
        Name: "Second Awakening R",
        Description:
          "Fuse with the mythological Trickster, awakening its true power.",
      },
    ],
    Events: [
      {
        Rank: 2,
        SocialRequired: { Stat: "Kindness", Level: 4 },
        Responses: [
          [
            { Text: "That wouldn’t solve anything. ", Notes: 0 },
            { Text: "	That’s a great idea. ", Notes: 2 },
          ],
          [
            { Text: "If we work together. ", Notes: 3 },
            { Text: "	Want me to help? ", Notes: 2 },
            { Text: "	I don’t know. ", Notes: 0 },
          ],
          [
            { Text: "Sounds good to me. ", Notes: 0 },
            { Text: "	Can you tell me again? ", Notes: 0 },
          ],
          [
            { Text: "I bet it will. ", Notes: 2 },
            { Text: "	I’m not sure. ", Notes: 0 },
            { Text: "	Why not ask him directly? ", Notes: 0 },
          ],
        ],
      },
      {
        Rank: 3,
        Responses: [
          [
            { Text: "I what? ", Notes: 0 },
            { Text: "	So you’re OK? ", Notes: 0 },
            { Text: "	I was about to come find you. ", Notes: 3 },
          ],
          [
            { Text: "Good to see you again. ", Notes: 3 },
            { Text: "	You’re the one who appeared. ", Notes: 2 },
            { Text: "	You need to be more careful. ", Notes: 0 },
          ],
          [
            { Text: "It’ll only get tougher. ", Notes: 0 },
            { Text: "	You will. ", Notes: 0 },
            { Text: "	We’ll both do our best. ", Notes: 2 },
          ],
        ],
      },
      {
        Rank: 4,
        Responses: [
          [
            { Text: "Nope. ", Notes: 2 },
            { Text: "	Let’s do this together. ", Notes: 3 },
            { Text: "	If you want. ", Notes: 0 },
          ],
          [
            { Text: "No, you’re talented. ", Notes: 0 },
            { Text: "	I bet they were just surprised. ", Notes: 0 },
          ],
          [
            { Text: "Not at all. ", Notes: 2 },
            { Text: "	Everyone does it. ", Notes: 2 },
            { Text: "	I think it’s cute. ", Notes: 3 },
          ],
          [
            { Text: "We’ll take it slow. ", Notes: 2 },
            { Text: "	You need more training. ", Notes: 0 },
            { Text: "	I’ll help you anytime. ", Notes: 2 },
          ],
        ],
      },
      {
        Rank: 5,
        Responses: [
          [
            { Text: "He’s in my class. ", Notes: 0 },
            { Text: "	Friend might be a bit much. ", Notes: 0 },
          ],
          [
            { Text: "I think you’re right. ", Notes: 3 },
            { Text: "	No. ", Notes: 0 },
            { Text: "	Your… what? ", Notes: 2 },
          ],
          [
            { Text: "What’s an NPC? ", Notes: 2 },
            { Text: "	Savage. ", Notes: 0 },
            { Text: "	He’s the protagonist. ", Notes: 3 },
          ],
          [
            { Text: "You did great. ", Notes: 2 },
            { Text: "	That’s nothing special. ", Notes: 0 },
            { Text: "	Ding! Level up! ", Notes: 0 },
          ],
        ],
      },
      {
        Rank: 6,
        Responses: [
          [
            { Text: "Were you happy? ", Notes: 2 },
            { Text: "	That must have been a shock. ", Notes: 3 },
            { Text: "	How did you react? ", Notes: 0 },
          ],
          [
            { Text: "You didn’t know any better. ", Notes: 2 },
            { Text: "	Did you apologize to her? ", Notes: 0 },
            { Text: "	Sounds like it was her fault. ", Notes: 0 },
          ],
          [
            { Text: "Understood. ", Notes: 0 },
            { Text: "	Someone’s pushy today. ", Notes: 0 },
          ],
          [
            { Text: "Are you running away again? ", Notes: 2 },
            { Text: "	Let’s calm down first. ", Notes: 0 },
            { Text: "	I’m right here with you. ", Notes: 0 },
          ],
        ],
      },
      {
        Rank: 7,
        Responses: [
          [
            { Text: "What horrible parents. ", Notes: 2 },
            { Text: "	We have to put a stop to this. ", Notes: 2 },
            { Text: "	Strange… how? ", Notes: 0 },
          ],
          [
            { Text: "I’ll do it, for you. ", Notes: 3 },
            { Text: "	We’ll show them the truth. ", Notes: 3 },
            { Text: "	Give me some time. ", Notes: 2 },
          ],
        ],
      },
      {
        Rank: 8,
        Responses: [
          [
            { Text: "That’s incredible. ", Notes: 3 },
            { Text: "	I’m glad to hear that. ", Notes: 3 },
            { Text: "	Did you stutter at all? ", Notes: 2 },
          ],
          [
            { Text: "You worked really hard too. ", Notes: 3 },
            { Text: "	You’re making me blush… ", Notes: 2 },
            { Text: "	Do I get a reward? ", Notes: 0 },
          ],
          [
            { Text: "Fine by me. ", Notes: 0 },
            { Text: "	That’s all? ", Notes: 0 },
          ],
          [
            { Text: "Congrats. ", Notes: 2 },
            { Text: "	You’ve still got more. ", Notes: 0 },
            { Text: "	Want more pats? ", Notes: 2 },
          ],
        ],
      },
      {
        Rank: 9,
        Responses: [
          [
            { Text: "You’ve really matured. ", Notes: 3 },
            { Text: "	What if you get bullied again? ", Notes: 2 },
          ],
          [
            { Text: "That doesn’t sound healthy… ", Notes: 0 },
            { Text: "	Are you OK, Futaba? ", Notes: 3 },
            { Text: "	You’re imagining things. ", Notes: 2 },
          ],
          [
            { Text: "If you want. ", Notes: 2 },
            { Text: "	No way. ", Notes: 2 },
            { Text: "	You’re giving up? ", Notes: 0 },
          ],
          [
            { Text: "Because we’re teammates. ", Notes: 0 },
            { Text: "Because I love you. ", Notes: 0, Romance: true },
          ],
          [
            { Text: "7	I would like that / If that’s OK with you. ", Notes: 0 },
            { Text: "	Um, Hello? / Is something wrong? ", Notes: 0 },
            { Text: "	Earth to Futaba? / Are you still alive? ", Notes: 0 },
          ],
          [
            { Text: "Instant yakisoba. ", Notes: 0 },
            { Text: "	Morgana. ", Notes: 0 },
            { Text: "	Do I really have to say it? ", Notes: 2 },
          ],
        ],
      },
      {
        Rank: 10,
        RomanceRequired: true,
        Responses: [
          [
            { Text: "What are you talking about? ", Notes: 0 },
            { Text: "	Don’t worry about it. ", Notes: 0 },
            { Text: "	…Pardoned? ", Notes: 0 },
          ],
          [
            { Text: "Mission complete. ", Notes: 0 },
            { Text: "	Nice job, Futaba. ", Notes: 0 },
            { Text: "	You did great. ", Notes: 0 },
          ],
          [
            { Text: "I know. ", Notes: 0 },
            { Text: "	I don’t mind. ", Notes: 0 },
            { Text: "	I like being close. ", Notes: 0 },
          ],
          [
            { Text: "What’s wrong. ", Notes: 0 },
            { Text: "	Come closer. ", Notes: 0 },
          ],
          [
            { Text: "Take your time. ", Notes: 3 },
            { Text: "	You can do this. ", Notes: 3 },
            { Text: "	We’ll do it together. ", Notes: 3 },
          ],
          [
            { Text: "You can’t lose to her. ", Notes: 3 },
            { Text: "	Do you want a job too? ", Notes: 2 },
          ],
          [
            { Text: "I honor my promises. ", Notes: 0 },
            { Text: "	Just keep it cheap. ", Notes: 0 },
            { Text: "	You remember that? ", Notes: 0 },
          ],
          [
            { Text: "I’m counting on you. ", Notes: 0 },
            { Text: "	That’s a lot of pressure. ", Notes: 0 },
          ],
          [
            { Text: "You already have that right. ", Notes: 3 },
            { Text: "	Took you long enough to ask. ", Notes: 3 },
            { Text: "	I want that right too. ", Notes: 3 },
          ],
        ],
      },
    ],
  },
  {
    Name: "Sojiro",
    Arcana: "Hierophant",
    Icon: HierophantIcon,
    Benefits: [
      {
        Rank: "1",
        Name: "Coffee Basics",
        Description:
          "Allows you to make coffee which slightly restores SP to one ally.",
      },
      {
        Rank: "4",
        Name: "Leblanc Curry",
        Description:
          "Allows you to make curry that slightly restores SP to all allies.",
      },
      {
        Rank: "6",
        Name: "Coffee Mastery",
        Description:
          "Allows you to make coffee which greatly restores SP to one ally.",
      },
      {
        Rank: "9",
        Name: "Curry Tips",
        Description:
          "Allows you to make curry that moderately restores SP to all allies.",
      },
      {
        Rank: "MAX",
        Name: "Curry Master",
        Description:
          "Allows you to make curry that greatly restores SP to all allies.",
      },
    ],
    Events: [
      {
        Rank: 1,
        Responses: [
          [
            { Text: "Got it. ", Notes: 3 },
            { Text: "	That was our deal. ", Notes: 2 },
            { Text: "	It’s the least I can do. ", Notes: 2 },
          ],
        ],
      },
      {
        Rank: 2,
        Responses: [
          [
            { Text: "Making coffee. ", Notes: 2 },
            { Text: "	Hitting on girls. ", Notes: 0 },
            { Text: "	No idea. ", Notes: 0 },
          ],
          [
            { Text: "Who was he? ", Notes: 0 },
            { Text: "	That guy seemed suspicious. ", Notes: 2 },
            { Text: "	Who’s the “her” he mentioned? ", Notes: 0 },
          ],
          [
            { Text: "I want the ladies to love me. ", Notes: 2 },
            { Text: "	I don’t care about that stuff. ", Notes: 0 },
          ],
          [
            { Text: "Got it. ", Notes: 2 },
            { Text: "	Give me a break. ", Notes: 0 },
            { Text: "	Why’d you call my cell? ", Notes: 0 },
          ],
        ],
      },
      {
        Rank: 3,
        Responses: [
          [
            { Text: "Medium-fine. ", Notes: 2 },
            { Text: "	Coarse. ", Notes: 0 },
            { Text: "	Anything goes. ", Notes: 0 },
          ],
          [
            { Text: "Is it a date? ", Notes: 0 },
            { Text: "	Is it trouble?? ", Notes: 2 },
            { Text: "	You don’t want my help anymore? ", Notes: 0 },
          ],
          [
            { Text: "I’m ready to work. ", Notes: 2 },
            { Text: "	Go easy on me. ", Notes: 0 },
            { Text: "	Thank you in advance. ", Notes: 2 },
          ],
        ],
      },
      {
        Rank: 4,
        Responses: [
          [
            { Text: "Tell me more. ", Notes: 3 },
            { Text: "	That sounds tough… ", Notes: 0 },
            { Text: "	It all tastes the same to me. ", Notes: 0 },
          ],
          [
            { Text: "Run for help ", Notes: 0 },
            { Text: "	Call Sojiro’s phone ", Notes: 3 },
            { Text: "	Kick the man out ", Notes: 0 },
          ],
          [
            { Text: "Understood. ", Notes: 2 },
            { Text: "	I’m kind of nervous… ", Notes: 0 },
            { Text: "	I’ll kick him out. ", Notes: 0 },
          ],
        ],
      },
      {
        Rank: 5,
        DateRequirement: [8, 22],
        Responses: [
          [
            { Text: "It wasn’t bad. ", Notes: 2 },
            { Text: "	Nothing special. ", Notes: 0 },
            { Text: "	I think I’m addicted! ", Notes: 3 },
          ],
          [
            { Text: "She was like Futaba? ", Notes: 2 },
            { Text: "	She wasn’t normal, huh? ", Notes: 3 },
            { Text: "	So that’s why you’re a bachelor? ", Notes: 0 },
          ],
          [
            { Text: "It really paid off in the end. ", Notes: 2 },
            { Text: "	Almost brings a tear to my eye. ", Notes: 0 },
            { Text: "	So much history… ", Notes: 0 },
          ],
          [
            { Text: "Sounds good to me. ", Notes: 0 },
            { Text: "	She needs a balanced diet. ", Notes: 2 },
            { Text: "	There’s always instant noodles. ", Notes: 0 },
          ],
        ],
      },
      {
        Rank: 6,
        Responses: [
          [
            { Text: "I admire it. ", Notes: 0 },
            { Text: "	I’m not impressed. ", Notes: 0 },
            { Text: "	To each his own. ", Notes: 2 },
          ],
          [
            { Text: "You’re wrong. ", Notes: 2 },
            { Text: "	I’m sorry. ", Notes: 0 },
            { Text: "	Shut your mouth. ", Notes: 3 },
          ],
          [
            { Text: "Saving Futaba was no mistake. ", Notes: 2 },
            { Text: "	Just cut your ties with him. ", Notes: 0 },
          ],
          [
            { Text: "Is she okay? ", Notes: 0 },
            { Text: "	Try to relax. ", Notes: 0 },
            { Text: "	If I can help somehow… ", Notes: 3 },
          ],
        ],
      },
      {
        Rank: 7,
        SocialRequired: { Stat: "Kindness", Level: 5 },
        Responses: [
          [
            { Text: "You might be right. ", Notes: 3 },
            { Text: "	That’s not true. ", Notes: 0 },
            { Text: "	They’re still delicious. ", Notes: 0 },
          ],
          [
            { Text: "Are you alright? ", Notes: 0 },
            { Text: "	Have you calmed down? ", Notes: 0 },
            { Text: "	Do you want to talk? ", Notes: 0 },
          ],
          [
            { Text: "Let’s talk to him. ", Notes: 0 },
            { Text: "	You should tell him that. ", Notes: 0 },
            { Text: "	You guys are one awkward duo. ", Notes: 0 },
          ],
          [
            { Text: "I’m truly glad. ", Notes: 0 },
            { Text: "	You’re welcome. ", Notes: 0 },
            { Text: "	Feel like a real dad now? ", Notes: 3 },
          ],
        ],
      },
      {
        Rank: 8,
        Responses: [
          [
            { Text: "You want my suggestion? ", Notes: 2 },
            { Text: "	Something with curry. ", Notes: 3 },
            { Text: "	I can’t decide! ", Notes: 0 },
          ],
          [
            { Text: "I didn’t do anything wrong. ", Notes: 0 },
            { Text: "	I was just protecting Futaba. ", Notes: 3 },
            { Text: "	Sorry. ", Notes: 0 },
          ],
        ],
      },
      {
        Rank: 9,
        Responses: [
          [
            { Text: "It’s great. ", Notes: 3 },
            { Text: "	He’s a bit of a nag. ", Notes: 3 },
          ],
          [
            { Text: "Are you crying? ", Notes: 0 },
            { Text: "	You have a great daughter. ", Notes: 3 },
            { Text: "	Congrats. ", Notes: 3 },
          ],
          [
            { Text: "You did great. ", Notes: 3 },
            { Text: "	Futaba did great. ", Notes: 3 },
            { Text: "	You two were already family. ", Notes: 2 },
          ],
        ],
      },
      {
        Rank: 10,
        Responses: [
          [
            { Text: "For what? ", Notes: 0 },
            { Text: "	You guys are religious? ", Notes: 0 },
            { Text: "	I’m not interested. ", Notes: 0 },
          ],
          [
            { Text: "Good for you. ", Notes: 3 },
            { Text: "	Thank you. ", Notes: 3 },
          ],
        ],
      },
    ],
  },
  {
    Name: "Akechi",
    Arcana: "Justice",
    Icon: JusticeIcon,
    Benefits: [
      {
        Rank: "2",
        Name: "Sleuthing Instinct",
        Description:
          "Chance to reveal one enemy affinity at the start of battle.",
      },
      {
        Rank: "4",
        Name: "Smooth Talk",
        Description:
          "If negotiation with a god-like Shadow fails, you can try again.",
      },
      {
        Rank: "6",
        Name: "Sleuthing Mastery",
        Description:
          "Chance to reveal all of one enemy’s affinities at the start of battle.",
      },
      {
        Rank: "6",
        Name: "Follow Up",
        Description:
          "Chance to perform a follow-up attack if Joker’s attack does not down the enemy.",
      },
      {
        Rank: "7",
        Name: "Harisen Recovery",
        Description:
          "Chance to cure status ailments inflicted upon party members.",
      },
      {
        Rank: "MAX",
        Name: "Endure",
        Description:
          "Chance to withstand an otherwise fatal attack with 1 HP remaining.",
      },
      {
        Rank: "MAX",
        Name: "Protect",
        Description: "Chance to shield Joker from an otherwise fatal attack.",
      },
      {
        Rank: "ROYAL",
        Name: "Second Awakening R",
        Description:
          "Fuse with the mythological Trickster, awakening its true power.",
      },
    ],
    Events: [
      {
        Rank: 2,
        Responses: [
          [
            { Text: "You always seem so busy. ", Notes: 2 },
            { Text: "	Do you have no friends? ", Notes: 0 },
          ],
          [
            { Text: "Is that your win? ", Notes: 0 },
            { Text: "	Not bad. ", Notes: 0 },
          ],
          [
            { Text: "Shoot very carefully. ", Notes: 2 },
            { Text: "	I’ll go for a power shot. ", Notes: 2 },
          ],
          [
            { Text: "You used your right hand. ", Notes: 0 },
            { Text: "	…Aren’t you left-handed? ", Notes: 0 },
          ],
          [
            { Text: "Maybe i’ll be a detective. ", Notes: 2 },
            { Text: "	No holding back next time. ", Notes: 2 },
            { Text: "	I see a lot of things. ", Notes: 3 },
          ],
          [
            { Text: "Sure. ", Notes: 0 },
            { Text: "	I’ll think about it. ", Notes: 0 },
            { Text: "	As rivals? ", Notes: 2 },
          ],
        ],
      },

      {
        Rank: 3,
        SocialRequired: { Stat: "Charm", Level: 3 },
        Responses: [
          [
            { Text: "Got a sweet tooth, huh? ", Notes: 0 },
            { Text: "	Come here often? ", Notes: 0 },
          ],
          [
            { Text: "Should’ve figured. ", Notes: 3 },
            { Text: "	Your life must be so hard. ", Notes: 2 },
            { Text: "	I can shoo them away… ", Notes: 0 },
          ],
          [
            { Text: "You’ve done nothing wrong. ", Notes: 0 },
            { Text: "	Why the rush? ", Notes: 0 },
          ],
          [
            { Text: "How about we find out? ", Notes: 0 },
            { Text: "	Come here a sec. ", Notes: 0 },
          ],
          [
            { Text: "You looked great. ", Notes: 0 },
            { Text: "	It was a necessary evil. ", Notes: 0 },
            { Text: "	I should’ve taken a picture. ", Notes: 0 },
          ],
          [
            { Text: "That was careless, huh? ", Notes: 0 },
            { Text: "	Wasn’t it fun? ", Notes: 2 },
            { Text: "	I can always dress you up again. ", Notes: 0 },
          ],
        ],
      },

      {
        Rank: 4,
        Responses: [
          [
            { Text: "What kind of place is this? ", Notes: 0 },
            { Text: "	This looks shady… ", Notes: 0 },
          ],
          [
            { Text: "Do they have coffee? ", Notes: 2 },
            { Text: "	But I’m underage. ", Notes: 0 },
            { Text: "	Now this is my kind of club. ", Notes: 3 },
          ],
          [
            { Text: "Any recommendations? ", Notes: 3 },
            { Text: "	Anything’s fine by me. ", Notes: 2 },
            { Text: "	An ice-cold beer for me. ", Notes: 0 },
          ],
          [
            { Text: "It’s a great place. ", Notes: 2 },
            { Text: "	I feel a bit nervous. ", Notes: 0 },
          ],
          [
            { Text: "A run-down cafe. ", Notes: 0 },
            { Text: "	A shop with great coffee. ", Notes: 0 },
            { Text: "	I live there, actually. ", Notes: 0 },
          ],
          [
            { Text: "Pretty frequently. ", Notes: 3 },
            { Text: "	I can use a microwave. ", Notes: 3 },
            { Text: "	All I need is curry. ", Notes: 2 },
          ],
          [
            { Text: "What are you talking about? ", Notes: 0 },
            { Text: "	I kinda get it. ", Notes: 2 },
            { Text: "	You really are having fun. ", Notes: 0 },
          ],
        ],
      },

      {
        Rank: 5,
        Responses: [
          [
            { Text: "All the time. ", Notes: 0 },
            { Text: "	I’m not great at them. ", Notes: 0 },
            { Text: "	Have you played any? ", Notes: 0 },
          ],
          [
            { Text: "Are you used to gunplay? ", Notes: 2 },
            { Text: "	You took that seriously, huh. ", Notes: 0 },
          ],
          [
            { Text: "You wanted to be a hero? ", Notes: 3 },
            { Text: "	Very interesting. ", Notes: 2 },
            { Text: "	Hard to imagine. ", Notes: 0 },
          ],
          [
            { Text: "Sticking to your justice. ", Notes: 0 },
            { Text: "	Doing what people want. ", Notes: 0 },
            { Text: "	Neither, really. ", Notes: 0 },
          ],
          [
            { Text: "You did fine. ", Notes: 2 },
            { Text: "	You’ve got a long way to go. ", Notes: 2 },
            { Text: "	You were getting cocky. ", Notes: 2 },
          ],
        ],
      },
      {
        Rank: 6,
        Responses: [
          [
            { Text: "So relaxing… ", Notes: 2 },
            { Text: "	Seeing you here is weird. ", Notes: 0 },
            { Text: "	A while, huh? ", Notes: 3 },
          ],
          [
            { Text: "That was horrible of her. ", Notes: 0 },
            { Text: "	… You’ve been through a lot. ", Notes: 2 },
          ],
          [
            { Text: "This is nothing. ", Notes: 3 },
            { Text: "	I’ll stay until you’re ready. ", Notes: 3 },
            { Text: "	Are YOU okay? ", Notes: 2 },
          ],
          [
            { Text: "Same. ", Notes: 3 },
            { Text: "	I’m just fine. ", Notes: 0 },
            { Text: "	Guess I win. ", Notes: 2 },
          ],
          [
            { Text: "Because we get along. ", Notes: 2 },
            { Text: "	Because we’re similar. ", Notes: 2 },
          ],
          [
            { Text: "I think you’re right. ", Notes: 3 },
            { Text: "	I don’t know about that. ", Notes: 0 },
            { Text: "	Can I put my clothes on? ", Notes: 2 },
          ],
          [
            { Text: "True. ", Notes: 0 },
            { Text: "	They’d probably love it. ", Notes: 0 },
            { Text: "	My bad, I guess. ", Notes: 2 },
          ],
        ],
      },
      {
        Rank: 7,
        SocialRequired: { Stat: "Knowledge", Level: 4 },
        Responses: [
          [
            { Text: "Yeah, it’s convoluted. ", Notes: 2 },
            { Text: "	That’s why it’s so fun. ", Notes: 3 },
          ],
          [
            { Text: "The psychotic breakdowns. ", Notes: 0 },
            { Text: "	What’re you getting at? ", Notes: 0 },
          ],
          [
            { Text: "I’ve made up my mind. ", Notes: 0 },
            { Text: "	I won’t miss my shot. ", Notes: 0 },
          ],
          [
            { Text: "It’s thanks to you. ", Notes: 2 },
            { Text: "	I couldn’t let myself lose. ", Notes: 3 },
          ],
          [
            { Text: "But we’re teammates now. ", Notes: 0 },
            { Text: "	Wnat to join us? ", Notes: 0 },
          ],
          [
            { Text: "I’ll think about it. ", Notes: 0 },
            { Text: "	I’m not doing that. ", Notes: 0 },
            { Text: "	You’re my rival. ", Notes: 0 },
          ],
          [
            { Text: "Do I? ", Notes: 0 },
            { Text: "	I don’t know. ", Notes: 0 },
            { Text: "	We’re rivals, aren’t we? ", Notes: 2 },
          ],
        ],
      },

      {
        Rank: 8,
        Responses: [
          [
            { Text: "What’d you want to discuss? ", Notes: 0 },
            { Text: "	Why are we in Mementos? ", Notes: 0 },
          ],
          [
            { Text: "I thought you meant in pool. ", Notes: 0 },
            { Text: "	You want to fight? ", Notes: 0 },
            { Text: "	But why, though? ", Notes: 0 },
          ],
          [
            { Text: "All right. ", Notes: 0 },
            { Text: "	Let’s do this. ", Notes: 0 },
          ],
          [
            { Text: "Are you satisfied? ", Notes: 0 },
            { Text: "	Was that all you got? ", Notes: 0 },
            { Text: "	Do you want to keep going? ", Notes: 0 },
          ],
          [
            { Text: "I’d say the same for you. ", Notes: 0 },
            { Text: "	The feeling mutual. ", Notes: 0 },
          ],
          [
            { Text: "I definitely wouldn’t lose. ", Notes: 3 },
            { Text: "	I don’t know. ", Notes: 0 },
            { Text: "	Probably. ", Notes: 0 },
          ],
          [
            { Text: "Same here. ", Notes: 0 },
            { Text: "	Really hate losing, don’t you. ", Notes: 3 },
          ],
          [
            { Text: "I accept. ", Notes: 0 },
            { Text: "	Let me think about it. ", Notes: 0 },
          ],
        ],
      },
    ],
  },
  {
    Name: "Ann",
    Arcana: "Lovers",
    Icon: LoversIcon,
    Benefits: [
      {
        Rank: "2",
        Name: "Girl Talk",
        Description:
          "If negotiation with a female Shadow fails, you can try again.",
      },
      {
        Rank: "3",
        Name: "Follow Up",
        Description:
          "Chance to perform a follow-up attack if Joker’s attack does not down the enemy.",
      },
      {
        Rank: "4",
        Name: "Sexy Technique <3",
        Description:
          "Chance to grab the enemy’s attention and cancel their action.",
      },
      {
        Rank: "5",
        Name: "Crocodile Tears",
        Description:
          "Chance to force enemies to ask for less during negotiations.",
      },
      {
        Rank: "6",
        Name: "Harisen Recovery",
        Description:
          "Chance to cure status ailments inflicted upon party members.",
      },
      {
        Rank: "8",
        Name: "Endure",
        Description:
          "Chance to withstand an otherwise fatal attack with 1 HP remaining.",
      },
      {
        Rank: "9",
        Name: "Protect",
        Description: "Chance to shield Joker from an otherwise fatal attack.",
      },
      {
        Rank: "MAX",
        Name: "Second Awakening",
        Description: "Transforms her Persona into a mythological trickster.",
      },
      {
        Rank: "ROYAL",
        Name: "Second Awakening R",
        Description:
          "Fuse with the mythological Trickster, awakening its true power.",
      },
    ],
    Events: [
      {
        Rank: 2,
        SocialRequired: { Stat: "Kindness", Level: 2 },
        Responses: [
          [
            { Text: "Are you feeling better now? ", Notes: 3 },
            { Text: "	She’s so strong. ", Notes: 3 },
            { Text: "	So are you friends again? ", Notes: 2 },
          ],
          [
            { Text: "You can’t blame yourself. ", Notes: 2 },
            { Text: "	You might be right. ", Notes: 3 },
            { Text: "	Kamoshida had the upper hand. ", Notes: 2 },
          ],
          [
            { Text: "It was no big deal. ", Notes: 2 },
            { Text: "	I couldn’t just ignore you. ", Notes: 3 },
          ],
          [
            { Text: "I’ll help. ", Notes: 3 },
            { Text: "	Let’s find it together. ", Notes: 3 },
          ],
          [
            { Text: "Of course, You’re my teammate. ", Notes: 2 },
            { Text: "	Leave it to me. ", Notes: 2 },
            { Text: "	The no-refills thing again? ", Notes: 2 },
          ],
        ],
      },
      {
        Rank: 3,
        Responses: [
          [
            { Text: "How’s that? ", Notes: 0 },
            { Text: "	You’re amazing. ", Notes: 0 },
          ],
          [
            { Text: "What kind of stuff…? ", Notes: 0 },
            { Text: "	That’s your training…? ", Notes: 0 },
            { Text: "	I don’t get it. ", Notes: 0 },
          ],
          [
            { Text: "You’re stupid. ", Notes: 0 },
            { Text: "	You’re an airhead. ", Notes: 0 },
            { Text: "	You’re… unique. ", Notes: 0 },
          ],
          [
            { Text: "You’re a hard worker. ", Notes: 0 },
            { Text: "	That response was annoying. ", Notes: 0 },
            { Text: "	Can we stop yet? ", Notes: 0 },
          ],
          [
            { Text: "I like you. ", Notes: 2 },
            { Text: "	I love you. ", Notes: 2 },
            { Text: "	Can we stop yet? ", Notes: 3 },
          ],
          [
            { Text: "Listen to me. ", Notes: 0 },
            { Text: "	This won’t help your heart. ", Notes: 0 },
            { Text: "	You’re a genius… ", Notes: 0 },
          ],
          [
            { Text: "You’re right. ", Notes: 0 },
            { Text: "	You finally get it. ", Notes: 0 },
          ],
          [
            { Text: "That’s odd. ", Notes: 2 },
            { Text: "	Has that happened to you? ", Notes: 3 },
          ],
          [
            { Text: "Are you lonely? ", Notes: 0 },
            { Text: "	That freedom sounds nice. ", Notes: 2 },
          ],
          [
            { Text: "Could be. ", Notes: 2 },
            { Text: "	You’re so self-conscious. ", Notes: 0 },
            { Text: "	Was she a child model? ", Notes: 0 },
          ],
        ],
      },
      {
        Rank: 4,
        Responses: [
          [
            { Text: "I know what you mean. ", Notes: 3 },
            { Text: "	I’m not sure I follow. ", Notes: 0 },
            { Text: "	That comes down to you. ", Notes: 2 },
          ],
          [
            { Text: "That was mean of her. ", Notes: 2 },
            { Text: "	That’s hilarious. ", Notes: 3 },
            { Text: "	Was she right? ", Notes: 0 },
          ],
          [
            { Text: "Tell me. ", Notes: 3 },
            { Text: "	I’m afraid to know. ", Notes: 2 },
            { Text: "	…Who? ", Notes: 0 },
          ],
          [
            { Text: "Good idea. ", Notes: 3 },
            { Text: "	How exactly? ", Notes: 2 },
          ],
          [
            { Text: "That’s not going to work. ", Notes: 0 },
            { Text: "	You haven’t learned anything. ", Notes: 0 },
            { Text: "	Good luck with that. ", Notes: 3 },
          ],
          [
            { Text: "I train everyday. ", Notes: 2 },
            { Text: "	Not really. ", Notes: 0 },
            { Text: "	I carry Morgana in my bag. ", Notes: 2 },
          ],
        ],
      },
      {
        Rank: 5,
        Responses: [
          [
            { Text: "Maybe. ", Notes: 0 },
            { Text: "	Give it up. ", Notes: 2 },
          ],
          [
            { Text: "You’re outmatched. ", Notes: 0 },
            { Text: "	She’s amazing, huh… ", Notes: 2 },
          ],
          [
            { Text: "It had grace. ", Notes: 2 },
            { Text: "	She’d be a great Phantom Thief. ", Notes: 0 },
          ],
          [
            { Text: "So how do you do it? ", Notes: 0 },
            { Text: "	Tell me more. ", Notes: 0 },
          ],
          [
            { Text: "I figured that much. ", Notes: 0 },
            { Text: "	I mean, that’s why it’s “fake.” ", Notes: 0 },
          ],
        ],
      },
      {
        Rank: 6,
        Responses: [
          [
            { Text: "It seems that way. ", Notes: 3 },
            { Text: "	That’s such a simple solution. ", Notes: 0 },
            { Text: "	If it’s a friend, yeah. ", Notes: 2 },
          ],
          [
            { Text: "How so? ", Notes: 0 },
            { Text: "	Was she working hard? ", Notes: 0 },
            { Text: "	 Was she in pain? ", Notes: 0 },
          ],
          [
            { Text: "You’re not weak. ", Notes: 0 },
            { Text: "	It’s because you’re kind. ", Notes: 0 },
          ],
          [
            { Text: "Comfort her. ", Notes: 3 },
            { Text: "	Listen to what she has to say. ", Notes: 2 },
            { Text: "	Show her your own strength. ", Notes: 3 },
          ],
          [
            { Text: "Someone’s motivated. ", Notes: 2 },
            { Text: "	I’ll cheer you on. ", Notes: 2 },
            { Text: "	You gonna be okay? ", Notes: 0 },
          ],
        ],
      },
      {
        Rank: 7,
        Responses: [
          [
            { Text: "It’s a trap! ", Notes: 0 },
            { Text: "	She admires you. ", Notes: 2 },
          ],
          [
            { Text: "So she could show you up. ", Notes: 0 },
            { Text: "	Because you’re a natural beauty. ", Notes: 0 },
          ],
          [
            { Text: "Cheer up. ", Notes: 0 },
            { Text: "	Please don’t cry. ", Notes: 0 },
          ],
          [
            { Text: "You already are one. ", Notes: 0 },
            { Text: "	Go get ‘em, tiger. ", Notes: 2 },
            { Text: "	What about your action movies…? ", Notes: 0 },
          ],
          [
            { Text: "You got this. ", Notes: 2 },
            { Text: "	Don’t strain yourself. ", Notes: 0 },
            { Text: "	Trying to be like Mika? ", Notes: 0 },
          ],
        ],
      },
      {
        Rank: 8,
        Responses: [
          [
            { Text: "That’s a lot of work… ", Notes: 0 },
            { Text: "	You have some real guts. ", Notes: 3 },
            { Text: "	You’re beautiful as is. ", Notes: 2 },
          ],
          [
            { Text: "There’s no doubt in my mind. ", Notes: 3 },
            { Text: "	I hope so. ", Notes: 3 },
            { Text: "	Good luck finding it. ", Notes: 3 },
          ],
          [
            { Text: "Good advice. ", Notes: 0 },
            { Text: "	You’re so dumb, Ryuji… ", Notes: 0 },
          ],
          [
            { Text: "She’ll be happy to hear that. ", Notes: 3 },
            { Text: "	I’m sure she already knows. ", Notes: 3 },
          ],
          [
            { Text: "That’s probably it. ", Notes: 2 },
            { Text: "	I wonder. ", Notes: 0 },
            { Text: "	You can ask her yourself. ", Notes: 2 },
          ],
        ],
      },
      {
        Rank: 9,
        Responses: [
          [
            { Text: "It’s dangerous up here. ", Notes: 0 },
            { Text: "	Step away from the ledge. ", Notes: 0 },
            { Text: "	Why did you want to come here? ", Notes: 0 },
          ],
          [
            { Text: "And? ", Notes: 0 },
            { Text: "	She’s gone, isn’t she? ", Notes: 0 },
          ],
          [
            { Text: "Hang in there. ", Notes: 3 },
            { Text: "	I believe in you, Ann. ", Notes: 3 },
          ],
          [
            { Text: "You have me. ", Notes: 0, Romance: true },
            { Text: "	You have the others. ", Notes: 0 },
          ],
          [
            { Text: "You said “I love you.” ", Notes: 0 },
            { Text: "	I didn’t hear you. ", Notes: 0 },
          ],
          [
            { Text: "Of course. ", Notes: 2 },
            { Text: "	I’m yours forever. ", Notes: 2 },
            { Text: "	That’s up to you. ", Notes: 0 },
          ],
        ],
      },
      {
        Rank: 10,
        RomanceRequired: true,
        Responses: [
          [
            { Text: "You really gave it your all. ", Notes: 3 },
            { Text: "	You still have a ways to go. ", Notes: 2 },
            { Text: "	Everyone was complimenting you. ", Notes: 3 },
          ],
          [
            { Text: "That’s so embarrassing. ", Notes: 2 },
            { Text: "	I’ll be there with you. ", Notes: 3 },
            { Text: "	You can do it, Ann. ", Notes: 3 },
          ],
          [
            { Text: "What’s wrong? ", Notes: 0 },
            { Text: "	It’s just the two of us. ", Notes: 0 },
          ],
          [
            { Text: "Of course. ", Notes: 3 },
            { Text: "	Anything for you. ", Notes: 3 },
          ],
          [
            { Text: "I will. ", Notes: 0 },
            { Text: "	I already am. ", Notes: 0 },
          ],
          [
            { Text: "Of course. ", Notes: 0 },
            { Text: "	I should be asking you that. ", Notes: 0 },
          ],
          [
            { Text: "Couples? ", Notes: 0 },
            { Text: "	Just Once? ", Notes: 0 },
          ],
        ],
      },
    ],
  },
  {
    Name: "Mishima",
    Arcana: "Moon",
    Icon: MoonIcon,
    Benefits: [
      {
        Rank: "1",
        Name: "Mishima’s Support",
        Description: "Allows backup members to earn EXP.",
      },
      {
        Rank: "3",
        Name: "Mishima’s Enthusiasm",
        Description: "Increases EXP earned from battle.",
      },
      {
        Rank: "5",
        Name: "Mishima’s Desperation",
        Description: "Increases EXP earned by backup members.",
      },
      {
        Rank: "7",
        Name: "Phanboy",
        Description: "Greatly increases EXP earned from battle.",
      },
      {
        Rank: "MAX",
        Name: "Salvation Wish",
        Description:
          "Allows backup members to earn the same EXP as current party members..",
      },
    ],
    Events: [
      {
        Rank: 2,
        Responses: [
          [
            { Text: "I don’t understand. ", Notes: 0 },
            { Text: "	…Phan-Site? ", Notes: 0 },
          ],
          [
            { Text: "You’ve done good, kid. ", Notes: 3 },
            { Text: "	That sounds pretty tough. ", Notes: 0 },
            { Text: "	Is this really necessary? ", Notes: 0 },
          ],
          [
            { Text: "Uh, strategic… what? ", Notes: 0 },
            { Text: "	Sounds cool. ", Notes: 3 },
            { Text: "	You’re really hyped for this. ", Notes: 2 },
          ],
          [
            { Text: "Nice hustle, image manager. ", Notes: 2 },
            { Text: "	Calm down. ", Notes: 0 },
            { Text: "	All-nighters can mess you up. ", Notes: 0 },
          ],
        ],
      },
      {
        Rank: 3,
        Responses: [
          [
            { Text: "I’ve never heard that before. ", Notes: 0 },
            { Text: "	Great idea. ", Notes: 3 },
            { Text: "	I’m already taken. ", Notes: 2 },
          ],
          [
            { Text: "I’m worried about this… ", Notes: 0 },
            { Text: "	We’re part of… The Phandom? ", Notes: 2 },
            { Text: "	Let’s tell them the truth. ", Notes: 2 },
          ],
          [
            { Text: "It’s not your fault. ", Notes: 2 },
            { Text: "	Don’t overwork yourself. ", Notes: 0 },
            { Text: "	I can’t trust anyone anymore… ", Notes: 0 },
          ],
          [
            { Text: "Of course. ", Notes: 2 },
            { Text: "	Really? ", Notes: 2 },
            { Text: "	You’ll get it right next time. ", Notes: 2 },
          ],
        ],
      },
      {
        Rank: 4,
        Responses: [
          [
            { Text: "Steak sounds good. ", Notes: 3 },
            { Text: "	Some nice organic veggies. ", Notes: 0 },
            { Text: "	I love desserts. ", Notes: 2 },
          ],
          [
            { Text: "You’re amazing. ", Notes: 2 },
            { Text: "	That sounds like a scam. ", Notes: 0 },
            { Text: "	Stop this at once. ", Notes: 0 },
          ],
          [
            { Text: "You’re right. ", Notes: 0 },
            { Text: "	Of course it would. ", Notes: 0 },
            { Text: "	Maybe we can keep it. ", Notes: 0 },
          ],
          [
            { Text: "Yup. ", Notes: 2 },
            { Text: "	That’s one way to view it. ", Notes: 0 },
            { Text: "	You’ll get better ideas. ", Notes: 2 },
          ],
        ],
      },
      {
        Rank: 5,
        Responses: [
          [
            { Text: "Why was it so expensive? ", Notes: 2 },
            { Text: "	It looks almost real. ", Notes: 0 },
            { Text: "	Is it for me? ", Notes: 3 },
          ],
          [
            { Text: "That’s a good idea. ", Notes: 2 },
            { Text: "	Are you sure that’s necessary? ", Notes: 0 },
            { Text: "	Don’t do anything stupid. ", Notes: 0 },
          ],
          [
            { Text: "All right. ", Notes: 2 },
            { Text: "	I expect great things. ", Notes: 0 },
            { Text: "	… Did something happen. ", Notes: 0 },
          ],
        ],
      },
      {
        Rank: 6,
        Responses: [
          [
            { Text: "Just tell me already. ", Notes: 2 },
            { Text: "	I’m not interested. ", Notes: 0 },
            { Text: "	You sure are fired up… ", Notes: 2 },
          ],
          [
            { Text: "Calm yourself. ", Notes: 0 },
            { Text: "	Rumors are wrong all the time… ", Notes: 2 },
            { Text: "	It’s none of your business. ", Notes: 0 },
          ],
          [
            { Text: "Why? ", Notes: 0 },
            { Text: "	I didn’t ask for that. ", Notes: 0 },
          ],
          [
            { Text: "Is that right…? ", Notes: 0 },
            { Text: "	Absolutely. Nice job. ", Notes: 2 },
          ],
        ],
      },
      {
        Rank: 6.5,
        Responses: [
          [
            { Text: "And what exactly will we win? ", Notes: 2 },
            { Text: "	You’re so reliable. ", Notes: 3 },
            { Text: "	Chill out, dude. ", Notes: 0 },
          ],
          [
            { Text: "Sounds pretty twisted. ", Notes: 2 },
            { Text: "	By changing their hearts? ", Notes: 0 },
            { Text: "	You really need to chill. ", Notes: 2 },
          ],
          [
            { Text: "Fun…? ", Notes: 0 },
            { Text: "	This isn’t like you. ", Notes: 0 },
            { Text: "	You’re worrying me. ", Notes: 0 },
          ],
          [
            { Text: "We very well might. ", Notes: 0 },
            { Text: "	Are you feeling guilty? ", Notes: 0 },
          ],
          [
            { Text: "Let’s go. ", Notes: 0 },
            { Text: "	This is the only way… ", Notes: 0 },
          ],
          [
            { Text: "You’re riding our coattails. ", Notes: 0 },
            { Text: "	Would that really satisfy you? ", Notes: 0 },
          ],
          [
            { Text: "Do it yourself. ", Notes: 0 },
            { Text: "	We’re leaving. ", Notes: 0 },
            { Text: "	There’s no need. ", Notes: 0 },
          ],
        ],
      },
      {
        Rank: 7,
        Responses: [
          [
            { Text: "I don’t wanna change his heart. ", Notes: 0 },
            { Text: "	Let’s cancel the request. ", Notes: 0 },
          ],
          [
            { Text: "Stop worrying about fame. ", Notes: 0 },
            { Text: "	You still care about fame? ", Notes: 0 },
          ],
          [
            { Text: "I’m sure there is. ", Notes: 2 },
            { Text: "	I hope so. ", Notes: 0 },
            { Text: "	Maybe the Phan-Site? ", Notes: 3 },
          ],
          [
            { Text: "Kind of worrying… ", Notes: 2 },
            { Text: "	Be careful. ", Notes: 0 },
            { Text: "	It’s your time to shine. ", Notes: 2 },
          ],
        ],
      },
      {
        Rank: 8,
        Responses: [
          [
            { Text: "I’m not leaving. ", Notes: 3 },
            { Text: "	You should run too. ", Notes: 2 },
            { Text: "	What are you going to do? ", Notes: 0 },
          ],
          [
            { Text: "You’re just gonna take that? ", Notes: 2 },
            { Text: "	Believe in yourself. ", Notes: 2 },
            { Text: "	They’re the real losers. ", Notes: 2 },
          ],
          [
            { Text: "Totally. ", Notes: 2 },
            { Text: "	You were super cool. ", Notes: 3 },
            { Text: "	Wait, that was all an act? ", Notes: 3 },
          ],
          [
            { Text: "You’ll be fine. ", Notes: 2 },
            { Text: "	Calm down. ", Notes: 0 },
            { Text: "	You’ve got this, man. ", Notes: 2 },
          ],
        ],
      },
      {
        Rank: 9,
        Responses: [
          [
            { Text: "You, dead as a doornail. ", Notes: 0 },
            { Text: "	You showed some real courage. ", Notes: 3 },
            { Text: "	I’m glad you’re still alive. ", Notes: 2 },
          ],
          [
            { Text: "Something like that. ", Notes: 0 },
            { Text: "	Exactly. ", Notes: 0 },
          ],
          [
            { Text: "Don’t use our real names. ", Notes: 0 },
            { Text: "	This came out of nowhere. ", Notes: 0 },
            { Text: "	I can’t wait to watch it. ", Notes: 0 },
          ],
          [
            { Text: "Meh. ", Notes: 0 },
            { Text: "	What about a parfait instead? ", Notes: 0 },
            { Text: "	I’m feeling steak, actually. ", Notes: 0 },
          ],
          [
            { Text: "The sparkle in your eye. ", Notes: 2 },
            { Text: "	….. ", Notes: 0 },
            { Text: "	Your hair? ", Notes: 0 },
          ],
        ],
      },
      {
        Rank: 10,
        Responses: [
          [
            { Text: "Did you find your answer? ", Notes: 0 },
            { Text: "	Were you scared stiff? ", Notes: 0 },
          ],
          [
            { Text: "That was courageous. ", Notes: 3 },
            { Text: "	But you were afraid. ", Notes: 2 },
          ],
          [
            { Text: "I didn’t do anything. ", Notes: 0 },
            { Text: "	Nobody stole your heart. ", Notes: 0 },
            { Text: "	You changed yourself. ", Notes: 0 },
          ],
          [
            { Text: "I’m sure you will. ", Notes: 0 },
            { Text: "	Make it a bestseller. ", Notes: 0 },
            { Text: "	You have to write it first. ", Notes: 0 },
          ],
        ],
      },
    ],
  },
  {
    Name: "Makoto",
    Arcana: "Priestess",
    Benefits: [
      {
        Rank: "1",
        Name: "Shadow Calculus",
        Description:
          "Allows you to see skills and potential item drops on the analysis screen.",
      },
      {
        Rank: "3",
        Name: "Black Belt Talk",
        Description:
          "If negotiation with a martial arts-using Shadow fails, you can try again.",
      },
      {
        Rank: "4",
        Name: "Follow Up",
        Description:
          "Chance to perform a follow-up attack if Joker’s attack does not down the enemy.",
      },
      {
        Rank: "5",
        Name: "Harisen Recovery",
        Description:
          "Chance to cure status ailments inflicted upon party members.",
      },
      {
        Rank: "7",
        Name: "Shadow Factorization",
        Description:
          "Allows you to see Null, Repel, and Drain when highlighting a target in battle.",
      },
      {
        Rank: "8",
        Name: "Endure",
        Description:
          "Chance to withstand an otherwise fatal attack with 1 HP remaining.",
      },
      {
        Rank: "9",
        Name: "Protect",
        Description: "Chance to shield Joker from an otherwise fatal attack.",
      },
      {
        Rank: "MAX",
        Name: "Second Awakening",
        Description: "Transforms her Persona into a mythological trickster.",
      },
      {
        Rank: "ROYAL",
        Name: "Second Awakening R",
        Description:
          "Fuse with the mythological Trickster, awakening its true power.",
      },
    ],
    Icon: PriestessIcon,
    Events: [
      {
        Rank: 1,
        SocialRequired: { Stat: "Knowledge", Level: 1 },
        Responses: [
          [
            { Text: "Let’s go again sometime. ", Notes: 2 },
            { Text: "	It’s a new you. ", Notes: 1 },
            { Text: "	The red-light district next ", Notes: 3 },
          ],
        ],
      },
      {
        Rank: 2,
        Responses: [
          [
            { Text: "You’re very well informed. ", Notes: 2 },
            { Text: "	Have you ever been here? ", Notes: 0 },
            { Text: "	Stay close to me. ", Notes: 0 },
          ],
          [
            { Text: "You should have known better. ", Notes: 2 },
            { Text: "	That was dangerous. ", Notes: 3 },
            { Text: "	You get flustered easily, huh? ", Notes: 0 },
          ],
          [
            { Text: "Why is it called a salon? ", Notes: 0 },
            { Text: "	What kind of place is that? ", Notes: 0 },
          ],
          [
            { Text: "Couldn’t agree more. ", Notes: 2 },
            { Text: "	He just wouldn’t give up. ", Notes: 0 },
            { Text: "	Let’s actually go in next time. ", Notes: 0 },
          ],
        ],
      },
      {
        Rank: 3,
        Responses: [
          [
            { Text: "You have the wrong idea. ", Notes: 2 },
            { Text: "	So what if we were together? ", Notes: 0 },
            { Text: "	It’s none of your business. ", Notes: 0 },
          ],
          [
            { Text: "Don’t let it get to you. ", Notes: 2 },
            { Text: "	You can change. ", Notes: 3 },
            { Text: "	Beep boop. ", Notes: 0 },
          ],
          [
            { Text: "Sounds like you two get along. ", Notes: 2 },
            { Text: "	Buchimaru-kun? ", Notes: 0 },
            { Text: "	Okay, calm down. ", Notes: 0 },
          ],
        ],
      },
      {
        Rank: 4,
        Responses: [
          [
            { Text: "That’s unlike you. ", Notes: 2 },
            { Text: "	Is Thieves work distracting you? ", Notes: 0 },
            { Text: "	I’m sure you did better than me. ", Notes: 0 },
          ],
          [
            { Text: "Eiko? ", Notes: 0 },
            { Text: "	…Who? ", Notes: 0 },
          ],
          [
            { Text: "Don’t you have goals? ", Notes: 0 },
            { Text: "	What about college? ", Notes: 0 },
            { Text: "	What do you mean? ", Notes: 0 },
          ],
          [
            { Text: "Why do you use it? ", Notes: 3 },
            { Text: "	That’s adorable. ", Notes: 2 },
            { Text: "	You’re not very ladylike… ", Notes: 0 },
          ],
          [
            { Text: "Do you still want to pursue it? ", Notes: 0 },
            { Text: "	I like a woman in uniform. ", Notes: 2 },
            { Text: "	It’s an amazing goal. ", Notes: 3 },
          ],
        ],
      },
      {
        Rank: 5,
        Responses: [
          [
            { Text: "Are you jealous of them? ", Notes: 0 },
            { Text: "	That’s annoying. ", Notes: 2 },
            { Text: "	He sounds suspicious. ", Notes: 3 },
          ],
          [
            { Text: "I got this. ", Notes: 3 },
            { Text: "	Why do I have to do it? ", Notes: 0 },
            { Text: "	Only if I can take it seriously. ", Notes: 2 },
          ],
          [
            { Text: "Fist! Of! Justice! ", Notes: 0 },
            { Text: "	Report him to the police. ", Notes: 0 },
            { Text: "	Try to reach out to her. ", Notes: 2 },
          ],
        ],
      },
      {
        Rank: 6,
        SocialRequired: { Stat: "Charm", Level: 5 },
        Responses: [
          [
            { Text: "We just started. ", Notes: 2 },
            { Text: "	We’re fighting right now. ", Notes: 0 },
            { Text: "	Love comes in many forms. ", Notes: 3 },
          ],
          [
            { Text: "Don’t be so pushy. ", Notes: 0 },
            { Text: "	Back off. ", Notes: 0 },
            { Text: "	Here, have my number instead. ", Notes: 0 },
          ],
          [
            { Text: "No, you’re being considerate. ", Notes: 0 },
            { Text: "	You worry too much. ", Notes: 0 },
            { Text: "	Probably a little. ", Notes: 0 },
          ],
          [
            { Text: "Tell him you’re  on a date. ", Notes: 2 },
            { Text: "	You’re allowed to ignore him. ", Notes: 0 },
            { Text: "	Fire the same thing back. ", Notes: 0 },
          ],
        ],
      },
      {
        Rank: 7,
        Responses: [
          [
            { Text: "Do you think he likes you? ", Notes: 0 },
            { Text: "	Does Eiko know about this? ", Notes: 0 },
          ],
          [
            { Text: "Probably a little. ", Notes: 0 },
            { Text: "	You watch too many soap operas. ", Notes: 0 },
            { Text: "	He’s definitely suspicious. ", Notes: 0 },
          ],
          [
            { Text: "ho was their leader? ", Notes: 0 },
            { Text: "	What gang was it? ", Notes: 0 },
          ],
          [
            { Text: "That’s a horrible story. ", Notes: 3 },
            { Text: "	Was it tough without him?? ", Notes: 2 },
            { Text: "	He was a noble man. ", Notes: 3 },
          ],
          [
            { Text: "That’s admirable. ", Notes: 3 },
            { Text: "	I’m sure he was happy. ", Notes: 3 },
          ],
          [
            { Text: "Do you have an answer? ", Notes: 2 },
            { Text: "	You can figure that out now. ", Notes: 2 },
          ],
          [
            { Text: "I’m game if you are. ", Notes: 2 },
            { Text: "	What are you going to say? ", Notes: 0 },
            { Text: "	Refuse her, please. ", Notes: 2 },
          ],
          [
            { Text: "Of course.. ", Notes: 2 },
            { Text: "	I guess so. ", Notes: 0 },
            { Text: "	It’s the role I always hoped for. ", Notes: 2 },
          ],
        ],
      },
      {
        Rank: 8,
        Responses: [
          [
            { Text: "He says that to all his girls. ", Notes: 2 },
            { Text: "	That’s how he ropes you in. ", Notes: 2 },
            { Text: "	I’m not sure. ", Notes: 0 },
          ],
          [
            { Text: "Absolutely. ", Notes: 3 },
            { Text: "	What are we going to do? ", Notes: 2 },
            { Text: "	Eh, she deserves him. ", Notes: 2 },
          ],
        ],
      },
      {
        Rank: 9,
        Responses: [
          [
            { Text: "Get away from her! ", Notes: 3 },
            { Text: "	Your fight’s with me. ", Notes: 3 },
            { Text: "	I’m calling the cops. ", Notes: 3 },
          ],
          [
            { Text: "We should get out of here. ", Notes: 2 },
            { Text: "	Follow me. ", Notes: 2 },
          ],
          [
            { Text: "It looked like it hurt. ", Notes: 0 },
            { Text: "	That was the right move. ", Notes: 2 },
            { Text: "	You really smacked her. ", Notes: 0 },
          ],
          [
            { Text: "I’m a regular here. ", Notes: 3 },
            { Text: "	It’s a popular meeting spot. ", Notes: 3 },
            { Text: "	Not as much as you. ", Notes: 2 },
          ],
          [
            { Text: "You’ll find someone someday. ", Notes: 3 },
            { Text: "I’ll be your study partner. ", Notes: 0, Romance: true },
          ],
          [
            { Text: "I do. ", Notes: 3, Romance: true },
            { Text: "	That’s not what I meant. ", Notes: 0 },
          ],
          [
            { Text: "I’d do anything for you. ", Notes: 2 },
            { Text: "	Were you scared? ", Notes: 0 },
            { Text: "	No big deal. ", Notes: 2 },
          ],
        ],
      },
      {
        Rank: 10,
        RomanceRequired: true,
        Responses: [
          [
            { Text: "That’s incredible. ", Notes: 2 },
            { Text: "	Your slap worked wonders. ", Notes: 0 },
            { Text: "	I’m so relieved. ", Notes: 0 },
          ],
          [
            { Text: "Are you stressing over exams? ", Notes: 2 },
            { Text: "	Back to studying? ", Notes: 0 },
            { Text: "	For your sister? ", Notes: 0 },
          ],
          [
            { Text: "Police commissioner? ", Notes: 0 },
            { Text: "	That sounds difficult. ", Notes: 2 },
            { Text: "	Why did you choose that? ", Notes: 0 },
          ],
          [
            { Text: "What an admirable goal. ", Notes: 3 },
            { Text: "	That’s an amazing dream. ", Notes: 2 },
            { Text: "	Your father would be proud.", Notes: 3 },
          ],
          [
            { Text: "Haha, yea. ", Notes: 0 },
            { Text: "	It’s not funny at all. ", Notes: 0 },
            { Text: "	Just be careful, OK? ", Notes: 2 },
          ],
          [
            { Text: "What’s wrong? ", Notes: 0 },
            { Text: "	Do you want to study? ", Notes: 0 },
          ],
        ],
      },
    ],
  },
  {
    Name: "Hifumi",
    Arcana: "Star",
    Icon: StarIcon,
    Benefits: [
      {
        Rank: "1",
        Name: "Koma Sabaki",
        Description:
          "Allows you to swap current party with backup members during Joker’s turn.",
      },
      {
        Rank: "3",
        Name: "Uchikomi",
        Description:
          "Chance for a follow-up by a backup member if Joker downs an enemy.",
      },
      {
        Rank: "5",
        Name: "Kakoi Kuzushi",
        Description:
          "Allows you to attempt to escape, even when surrounded by the enemy.",
      },
      {
        Rank: "7",
        Name: "Narikin",
        Description:
          "Earn double money if a battle is won in 1 turn after a successful ambush.",
      },
      {
        Rank: "9",
        Name: "Touryou",
        Description:
          "Decreases turn delay to zero, allowing you to instantly escape battle.",
      },
      {
        Rank: "MAX",
        Name: "Togo System",
        Description:
          "Allows you to swap current party with backup members during anyone’s turn.",
      },
    ],
    Events: [
      {
        Rank: 1,
        SocialRequired: { Stat: "Charm", Level: 3 },
        Responses: [
          [
            { Text: "Sure. ", Notes: 1 },
            { Text: "	I guess we can. ", Notes: 1 },
            { Text: "	Lucky me. ", Notes: 2 },
          ],
        ],
      },
      {
        Rank: 2,
        Responses: [
          [
            { Text: "That’s interesting. ", Notes: 2 },
            { Text: "	I like that attitude change. ", Notes: 0 },
            { Text: "	It’s a bit scary. ", Notes: 0 },
          ],
          [
            { Text: "Have confidence in yourself. ", Notes: 0 },
            { Text: "	Don’t worry about them. ", Notes: 0 },
          ],
          [
            { Text: "When is it coming out? ", Notes: 0 },
            { Text: "	You’re, like, an idol. ", Notes: 0 },
            { Text: "	But you don’t want to, right? ", Notes: 2 },
          ],
        ],
      },
      {
        Rank: 3,
        Responses: [
          [
            { Text: "Describes you perfectly. ", Notes: 2 },
            { Text: "	No, I didn’t. ", Notes: 0 },
            { Text: "	That’s quite the headline. ", Notes: 0 },
          ],
          [
            { Text: "You don’t enjoy it? ", Notes: 0 },
            { Text: "	Having a difficult time? ", Notes: 2 },
            { Text: "	You should just decline. ", Notes: 0 },
          ],
          [
            { Text: "Bring it on. ", Notes: 2 },
            { Text: "	Don’t worry about it. ", Notes: 0 },
            { Text: "	This is part of our deal too. ", Notes: 0 },
          ],
        ],
      },
      {
        Rank: 4,
        Responses: [
          [
            { Text: "I don’t mind. ", Notes: 2 },
            { Text: "	She has a bad vibe. ", Notes: 0 },
            { Text: "	Must’ve been the katsu curry. ", Notes: 2 },
          ],
          [
            { Text: "They’re ridiculous. ", Notes: 0 },
            { Text: "	They’re cool. ", Notes: 2 },
            { Text: "	Never heard of them. ", Notes: 0 },
          ],
          [
            { Text: "I’d love to. ", Notes: 2 },
            { Text: "	If our schedules match up. ", Notes: 0 },
            { Text: "	Where shall we go next? ", Notes: 2 },
          ],
        ],
      },
      {
        Rank: 5,
        Responses: [
          [
            { Text: "You’re not allowed to date? ", Notes: 0 },
            { Text: "	She’s scary. ", Notes: 2 },
            { Text: "	Accomplish things? ", Notes: 0 },
          ],
          [
            { Text: "You don’t like the attention? ", Notes: 0 },
            { Text: "	You should stop then. ", Notes: 2 },
            { Text: "	Have you told your mother? ", Notes: 0 },
          ],
          [
            { Text: "No worries. ", Notes: 0 },
            { Text: "	You’ve got a lot to deal with… ", Notes: 2 },
            { Text: "	Why do you have to apologize? ", Notes: 0 },
          ],
        ],
      },
      {
        Rank: 6,
        Responses: [
          [
            { Text: "You’ll be famous. ", Notes: 0 },
            { Text: "	Is that frustrating? ", Notes: 2 },
            { Text: "	The media is scary. ", Notes: 0 },
          ],
          [
            { Text: "Do you still like shogi? ", Notes: 2 },
            { Text: "	Is that what you want to do? ", Notes: 0 },
            { Text: "	Do what you love. ", Notes: 2 },
          ],
          [
            { Text: "You think so? ", Notes: 0 },
            { Text: "	You’re imagining things. ", Notes: 2 },
            { Text: "	Confess your sins, my child. ", Notes: 0 },
          ],
        ],
      },
      {
        Rank: 7,
        Responses: [
          [
            { Text: "That’s almost a relief. ", Notes: 2 },
            { Text: "	Don’t let your guard down. ", Notes: 0 },
            { Text: "	It may come down to luck. ", Notes: 3 },
          ],
          [
            { Text: "Give it your all. ", Notes: 2 },
            { Text: "	I believe in you. ", Notes: 3 },
            { Text: "	Idols are cool too. ", Notes: 0 },
          ],
        ],
      },
      {
        Rank: 7.5,
        SocialRequired: { Stat: "Knowledge", Level: 5 },
        Responses: [
          [
            { Text: "What do you mean? ", Notes: 0 },
            { Text: "	I don’t understand. ", Notes: 0 },
          ],
          [
            { Text: "That won’t work. ", Notes: 2 },
            { Text: "	That’s a great strategy. ", Notes: 0 },
            { Text: "	Do you intend to lose? ", Notes: 0 },
          ],
          [
            { Text: "Let’s make her reconsider. ", Notes: 0 },
            { Text: "	Let’s do something about it. ", Notes: 0 },
          ],
          [
            { Text: "What’s your mother’s name? ", Notes: 0 },
            { Text: "	Tell me her name. ", Notes: 0 },
          ],
        ],
      },
      {
        Rank: 8,
        Responses: [
          [
            { Text: "Maybe… ", Notes: 2 },
            { Text: "	You’re overthinking it. ", Notes: 0 },
            { Text: "	I’m glad her heart changed. ", Notes: 3 },
          ],
          [
            { Text: "Lose what? ", Notes: 0 },
            { Text: "	What’re you talking about? ", Notes: 0 },
          ],
          [
            { Text: "I support it. ", Notes: 2 },
            { Text: "	You should really rethink this. ", Notes: 0 },
            { Text: "	It’s certainly admirable. ", Notes: 0 },
          ],
        ],
      },
      {
        Rank: 9,
        Responses: [
          [
            { Text: "Give it all you go. ", Notes: 2 },
            { Text: "	Do you feel confident? ", Notes: 0 },
            { Text: "	You can do it. ", Notes: 0 },
          ],
          [
            { Text: "It was a good effort. ", Notes: 0 },
            { Text: "	You’ll win next time. ", Notes: 0 },
            { Text: "	A very queenly decision. ", Notes: 3 },
          ],
          [
            { Text: "I want to become stronger. ", Notes: 0 },
            { Text: "	I want to stay by your side. ", Notes: 0, Romance: true },
          ],
          [
            { Text: "I want us to date. ", Notes: 0, Romance: true },
            { Text: "	We’ll be friends forever. ", Notes: 0 },
          ],
          [
            { Text: "Anything for you. ", Notes: 2 },
            { Text: "	It was all a big coincidence. ", Notes: 2 },
            { Text: "	It was love at first sight. ", Notes: 2 },
          ],
        ],
      },
      {
        Rank: 10,
        RomanceRequired: true,
        Responses: [
          [
            { Text: "That’s rough. ", Notes: 2 },
            { Text: "	You’ll triumph in the end. ", Notes: 3 },
            { Text: "	Just don’t lose. ", Notes: 3 },
          ],
          [
            { Text: "You can do it. ", Notes: 0 },
            { Text: "	That’s reassuring. ", Notes: 0 },
          ],
          [
            { Text: "So you know. ", Notes: 0 },
            { Text: "	What do you mean? ", Notes: 0 },
            { Text: "	We do. ", Notes: 0 },
          ],
          [
            { Text: "Thank you. ", Notes: 0 },
            { Text: "	That’s reassuring. ", Notes: 0 },
          ],
          [
            { Text: "What’s wrong? ", Notes: 0 },
            { Text: "	Are you nervous? ", Notes: 0 },
          ],
        ],
      },
    ],
  },
  {
    Name: "Yoshida",
    Arcana: "Sun",
    Icon: SunIcon,
    Benefits: [
      {
        Rank: "2",
        Name: "Diplomacy",
        Description:
          "Occasionally asks for more money or items during negotiations.",
      },
      {
        Rank: "3",
        Name: "Fundraising",
        Description:
          "Allows you to ask for large amounts of money during negotiations.",
      },
      {
        Rank: "5",
        Name: "Manipulation",
        Description:
          "Occasionally raises the chances of an enemy giving you a rare item.",
      },
      {
        Rank: "8",
        Name: "Mind Control",
        Description:
          "Occasionally lets you skip negotiation when attempting to obtain a Persona.",
      },
      {
        Rank: "MAX",
        Name: "Charismatic Speech",
        Description: "Allows you to form contracts with higher-level Shadows.",
      },
    ],
    Events: [
      {
        Rank: 1,
        Responses: [
          [
            { Text: "Of course. ", Notes: 1 },
            { Text: "	If I must. ", Notes: 0 },
            { Text: "	Let me write this down. ", Notes: 3 },
          ],
        ],
      },
      {
        Rank: 2,
        Responses: [
          [
            { Text: "I want to change the world. ", Notes: 0 },
            { Text: "	I want to improve my speech. ", Notes: 2 },
            { Text: "	I’m not sure… ", Notes: 0 },
          ],
          [
            { Text: "One with conviction. ", Notes: 2 },
            { Text: "	A popular one. ", Notes: 0 },
            { Text: "	I don’t know yet. ", Notes: 2 },
          ],
          [
            { Text: "That was helpful. ", Notes: 2 },
            { Text: "	I knew that already. ", Notes: 0 },
            { Text: "	What I want to accomplish? ", Notes: 0 },
          ],
          [
            { Text: "It was helpful. ", Notes: 2 },
            { Text: "	Somewhat. ", Notes: 0 },
            { Text: "	It changed my whole outlook. ", Notes: 2 },
          ],
        ],
      },
      {
        Rank: 3,
        Responses: [
          [
            { Text: "Yes, Mr. Yoshida told me. ", Notes: 0 },
            { Text: "	No, and I don’t care. ", Notes: 0 },
          ],
          [
            { Text: "His message. ", Notes: 2 },
            { Text: "	No His speaking skills. ", Notes: 2 },
            { Text: "	It’s hard to say. ", Notes: 0 },
          ],
          [
            { Text: "I will. ", Notes: 0 },
            { Text: "	I’m not sure I get it. ", Notes: 0 },
            { Text: "	You think I’ll ever find it? ", Notes: 2 },
          ],
        ],
      },
      {
        Rank: 4,
        Responses: [
          [
            { Text: "Stop interrupting him. ", Notes: 0 },
            { Text: "	You’re annoying the audience. ", Notes: 0 },
            { Text: "	Just shut up and listen. ", Notes: 0 },
          ],
          [
            { Text: "Yep. ", Notes: 0 },
            { Text: "	What do you think? ", Notes: 0 },
          ],
          [
            { Text: "The ex-convict has a point. ", Notes: 0 },
            { Text: "	Listen to what he has to say. ", Notes: 0 },
            { Text: "	So what if he’s No-Good Tora? ", Notes: 0 },
          ],
          [
            { Text: "I couldn’t help myself. ", Notes: 2 },
            { Text: "	I just spoke the truth. ", Notes: 0 },
          ],
          [
            { Text: "I will. ", Notes: 2 },
            { Text: "	I’m not sure I can. ", Notes: 0 },
            { Text: "	Can’t forget your roots. ", Notes: 2 },
          ],
        ],
      },
      {
        Rank: 5,
        Responses: [
          [
            { Text: "I think so. ", Notes: 2 },
            { Text: "	Don’t let your guard down. ", Notes: 0 },
            { Text: "	The media doesn’t matter. ", Notes: 3 },
          ],
        ],
      },
      {
        Rank: 6,
        Responses: [
          [
            { Text: "I’m for them. ", Notes: 2 },
            { Text: "	I’m against them. ", Notes: 0 },
            { Text: "	I don’t really care. ", Notes: 3 },
          ],
          [
            { Text: "I’d decline. ", Notes: 3 },
            { Text: "	I’d take the offer. ", Notes: 0 },
            { Text: "	I’d leave it to chance. ", Notes: 2 },
          ],
          [
            { Text: "I’ll keep this in mind. ", Notes: 2 },
            { Text: "	Lose sight of who I am? ", Notes: 0 },
            { Text: "	You make quite a case. ", Notes: 2 },
          ],
        ],
      },
      {
        Rank: 7,
        Responses: [
          [
            { Text: "You should decline. ", Notes: 2 },
            { Text: "	That’s a sweet deal. ", Notes: 0 },
            { Text: "	I wasn’t paying attention. ", Notes: 0 },
          ],
          [
            { Text: "He’s not No-Good Tora. ", Notes: 0 },
            { Text: "	Call him Mr. Yoshida. ", Notes: 0 },
            { Text: "	He’ll get elected this time. ", Notes: 0 },
          ],
          [
            { Text: "That’s not for you to decide. ", Notes: 0 },
            { Text: "	Maybe… ", Notes: 0 },
            { Text: "	I still believe in him. ", Notes: 0 },
          ],
        ],
      },
      {
        Rank: 8,
        Responses: [
          [
            { Text: "Are you going to do it? ", Notes: 0 },
            { Text: "	Don’t do it. ", Notes: 0 },
            { Text: "	That’s a difficult decision. ", Notes: 2 },
          ],
          [
            { Text: "Stick to your beliefs. ", Notes: 3 },
            { Text: "	Clear your name. ", Notes: 0 },
            { Text: "	Get elected. ", Notes: 0 },
          ],
          [
            { Text: "What good would that do? ", Notes: 0 },
            { Text: "	So what if you’re right? ", Notes: 0 },
            { Text: "	…… ", Notes: 0 },
          ],
          [
            { Text: "I’ll never foget that. ", Notes: 2 },
            { Text: "	It’s tougher than it seems. ", Notes: 2 },
            { Text: "	…… ", Notes: 0 },
          ],
        ],
      },
      {
        Rank: 9,
        Responses: [
          [
            { Text: "Do your best. ", Notes: 3 },
            { Text: "	Break a leg. ", Notes: 0 },
            { Text: "	I’m getting nervous. ", Notes: 2 },
          ],
          [
            { Text: "What are you talking about? ", Notes: 0 },
            { Text: "	You had a change of heart. ", Notes: 2 },
            { Text: "	…… ", Notes: 0 },
          ],
        ],
      },
      {
        Rank: 10,
        Responses: [
          [
            { Text: "Your true self was revealed. ", Notes: 3 },
            { Text: "	You’re going to be popular. ", Notes: 2 },
            { Text: "	Don’t let your guard down. ", Notes: 3 },
          ],
        ],
      },
    ],
  },
  {
    Name: "Kawakami",
    Arcana: "Temperance",
    Icon: TemperanceIcon,
    Benefits: [
      {
        Rank: "1",
        Name: "Slack Off",
        Description:
          "Allows you to perform various activities in Kawakami’s class.",
      },
      {
        Rank: "3",
        Name: "Housekeeping",
        Description:
          "Allows you to request Kawakami to make coffee or do laundry for you.",
      },
      {
        Rank: "5",
        Name: "Free Time",
        Description:
          "Gain free time in other teachers’ classes with Kawakami’s help.",
      },
      {
        Rank: "7",
        Name: "Super Housekeeping",
        Description:
          "Allows you to request Kawakami to make curry or infiltration tools for you.",
      },
      {
        Rank: "MAX",
        Name: "Special Massage",
        Description:
          "Request a massage after going into the Metaverse, letting you go out at night.",
      },
    ],
    Events: [
      {
        Rank: 1,
        SocialRequired: { Stat: "Guts", Level: 3 },
        Responses: [
          [
            { Text: "Yeah, I get it. ", Notes: 3 },
            { Text: "	I will if you will. ", Notes: 2 },
            { Text: "	Please stop talking like that. ", Notes: 2 },
          ],
        ],
      },
      {
        Rank: 2,
        Responses: [
          [
            { Text: "It does. ", Notes: 2 },
            { Text: "	I feel nothing. ", Notes: 0 },
            { Text: "	I’ll tell your boss. ", Notes: 0 },
          ],
          [
            { Text: "I can’t say I wasn’t… ", Notes: 0 },
            { Text: "	Absolutely not! ", Notes: 2 },
            { Text: "	What kind of weird things? ", Notes: 0 },
          ],
          [
            { Text: "You need money? ", Notes: 0 },
            { Text: "	What’s it for? ", Notes: 0 },
          ],
          [
            { Text: "Are you scolding me? ", Notes: 0 },
            { Text: "	This is all for you. ", Notes: 0 },
            { Text: "	I requested you. ", Notes: 0 },
          ],
          [
            { Text: "You have the wrong number ", Notes: 0 },
            { Text: "	Uh, what the hell? ", Notes: 0 },
            { Text: "	Is this the hard sell? ", Notes: 2 },
          ],
        ],
      },
      {
        Rank: 3,
        Responses: [
          [
            { Text: "Yeah, they do. ", Notes: 2 },
            { Text: "	Do some real cooking. ", Notes: 2 },
            { Text: "	Can I have a different maid. ", Notes: 0 },
          ],
          [
            { Text: "I was curious. ", Notes: 0 },
            { Text: "	So I could slack off in class. ", Notes: 0 },
            { Text: "	I wanted to see you. ", Notes: 0 },
          ],
          [
            { Text: "Your sister’s bills, right? ", Notes: 0 },
            { Text: "	I’ll request you more often. ", Notes: 3 },
            { Text: "	You’re really blunt. ", Notes: 0 },
          ],
          [
            { Text: "You have it rough. ", Notes: 0 },
            { Text: "	Are they expensive? ", Notes: 0 },
            { Text: "	Don’t overdo it. ", Notes: 0 },
          ],
          [
            { Text: "Thanks. ", Notes: 2 },
            { Text: "	I’ll work hard at it. ", Notes: 0 },
            { Text: "	You’re not in character. ", Notes: 0 },
          ],
        ],
      },
      {
        Rank: 4,
        Responses: [
          [
            { Text: "That would be great. ", Notes: 0 },
            { Text: "	What are you scheming? ", Notes: 0 },
          ],
          [
            { Text: "How rude. ", Notes: 2 },
            { Text: "	No surprise there. ", Notes: 0 },
            { Text: "	How old ARE you? ", Notes: 0 },
          ],
          [
            { Text: "Yes, you do. ", Notes: 2 },
            { Text: "	You’re pushing it. ", Notes: 0 },
            { Text: "	You need to love yourself. ", Notes: 3 },
          ],
          [
            { Text: "I already knew that. ", Notes: 0 },
            { Text: "	Why did you lie to me? ", Notes: 0 },
            { Text: "	You’re a bad teacher. ", Notes: 0 },
          ],
        ],
      },
      {
        Rank: 5,
        Responses: [
          [
            { Text: "It’s fun. ", Notes: 2 },
            { Text: "	I want to know more. ", Notes: 0 },
            { Text: "	Who’s the Master here? ", Notes: 2 },
          ],
          [
            { Text: "How Terrible… ", Notes: 2 },
            { Text: "	It was inevitable. ", Notes: 0 },
            { Text: "	So, did you stop? ", Notes: 2 },
          ],
          [
            { Text: "It’s not your fault. ", Notes: 0 },
            { Text: "	It was bad luck. ", Notes: 0 },
            { Text: "	It’s no one’s fault. ", Notes: 0 },
          ],
          [
            { Text: "You OK with that? ", Notes: 0 },
            { Text: "	Guardians, huh… ", Notes: 0 },
          ],
          [
            { Text: "It’s too late now. ", Notes: 0 },
            { Text: "	What about our deal? ", Notes: 0 },
            { Text: "	I want see you again. ", Notes: 0 },
          ],
          [
            { Text: "Curry is all I eat. ", Notes: 0 },
            { Text: "	You get bored of the taste. ", Notes: 0 },
            { Text: "	You want some? ", Notes: 2 },
          ],
        ],
      },
      {
        Rank: 6,
        Responses: [
          [
            { Text: "You just got here. ", Notes: 0 },
            { Text: "	Want to rest a bit? ", Notes: 2 },
            { Text: "	Give me back my money. ", Notes: 0 },
          ],
          [
            { Text: "Are you all right? ", Notes: 3 },
            { Text: "	Have you see a doctor? ", Notes: 2 },
            { Text: "	You should go home. ", Notes: 3 },
          ],
          [
            { Text: "Are you OK? ", Notes: 0 },
            { Text: "	Don’t overdo it. ", Notes: 0 },
          ],
          [
            { Text: "I’ll be fine. ", Notes: 0 },
            { Text: "	Nah, too lazy. ", Notes: 0 },
            { Text: "	How are you feeling, though? ", Notes: 2 },
          ],
        ],
      },
      {
        Rank: 7,
        Responses: [
          [
            { Text: "Don’t strain yourself. ", Notes: 2 },
            { Text: "	Don’t lie. ", Notes: 0 },
            { Text: "	Don’t pay them. ", Notes: 3 },
          ],
          [
            { Text: "Sister company? ", Notes: 0 },
            { Text: "	Can you make a lot there? ", Notes: 0 },
            { Text: "	Think this through more. ", Notes: 3 },
          ],
          [
            { Text: "That’s the wrong choice. ", Notes: 0 },
            { Text: "	Isn’t there another way? ", Notes: 0 },
            { Text: "	Just rest for now. ", Notes: 0 },
          ],
        ],
      },
      {
        Rank: 8,
        Responses: [
          [
            { Text: "That’s the wrong decision. ", Notes: 0 },
            { Text: "	Please reconsider. ", Notes: 0 },
            { Text: "	Is this really what you want? ", Notes: 3 },
          ],
          [
            { Text: "You’re running away. ", Notes: 2 },
            { Text: "	If that’s what you decided. ", Notes: 3 },
            { Text: "	I need my teacher. ", Notes: 0 },
          ],
          [
            { Text: "Try to remember ", Notes: 0 },
            { Text: "	That’s your answer. ", Notes: 0 },
            { Text: "	Take a look at yourself. ", Notes: 0 },
          ],
          [
            { Text: "Are you going to give up? ", Notes: 0 },
            { Text: "	Mistakes can be fixed. ", Notes: 0 },
          ],
          [
            { Text: "Be confident in your answer. ", Notes: 3 },
            { Text: "	That’s the right choice. ", Notes: 3 },
            { Text: "	You’re asking a student? ", Notes: 3 },
          ],
          [
            { Text: "I want to protect you. ", Notes: 3 },
            { Text: "	That’s reassuring. ", Notes: 3 },
          ],
          [
            { Text: "You’re welcome. ", Notes: 2 },
            { Text: "	So much for being a maid. ", Notes: 2 },
            { Text: "	I’ll do anything for you. ", Notes: 2 },
          ],
        ],
      },
      {
        Rank: 8.5,
        Responses: [
          [
            { Text: "We’re talking here. ", Notes: 0 },
            { Text: "	You know it, lady. ", Notes: 0 },
          ],
          [
            { Text: "You can’t give up. ", Notes: 0 },
            { Text: "	But you were so determined. ", Notes: 0 },
          ],
          [
            { Text: "What are their names again? ", Notes: 0 },
            { Text: "	I need their names. ", Notes: 0 },
          ],
        ],
      },
      {
        Rank: 9,
        Responses: [
          [
            { Text: "Nonsense. ", Notes: 3 },
            { Text: "	You may be right. ", Notes: 0 },
            { Text: "	Aren’t you old already…? ", Notes: 0 },
          ],
          [
            { Text: "What a bummer. ", Notes: 3 },
            { Text: "	Thank you for your service. ", Notes: 3 },
          ],
          [
            { Text: "Not really. ", Notes: 2 },
            { Text: "I want to keep seeing you. ", Notes: 2, Romance: true },
          ],
          [
            { Text: "Got it. ", Notes: 2 },
            { Text: "I mean what I say. ", Notes: 0, Romance: true },
          ],
          [
            { Text: "I’m a master; you’re a maid. ", Notes: 0 },
            { Text: "	I’m a man; you’re a woman. ", Notes: 0, Romance: true },
          ],
        ],
      },
      {
        Rank: 10,
        RomanceRequired: true,
        Responses: [
          [
            { Text: "…Really? ", Notes: 0 },
            { Text: "	I see. ", Notes: 0 },
            { Text: "	That’s too bad… ", Notes: 0 },
          ],
          [
            { Text: "It doesn’t matter. ", Notes: 0 },
            { Text: "	That’s the best part. ", Notes: 0 },
          ],
          [
            { Text: "We won’t get caught. ", Notes: 0 },
            { Text: "	Don’t worry about it. ", Notes: 0 },
            { Text: "	You’re so responsible. ", Notes: 0 },
          ],
          [
            { Text: "What are you talking about? ", Notes: 0 },
            { Text: "	When did you realize? ", Notes: 0 },
          ],
          [
            { Text: "You got me. ", Notes: 0 },
            { Text: "	You have no proof. ", Notes: 0 },
            { Text: "	…So what if I am? ", Notes: 0 },
          ],
          [
            { Text: "That sounds promising. ", Notes: 3 },
            { Text: "	I’ll make sure of it. ", Notes: 3 },
          ],
          [
            { Text: "I want to rely on you. ", Notes: 3 },
            { Text: "	I want you to rely on me. ", Notes: 3 },
          ],
        ],
      },
    ],
  },
  {
    Name: "Oda",
    Arcana: "Tower",
    Icon: TowerIcon,
    Benefits: [
      {
        Rank: "1",
        Name: "Down Shot",
        Description:
          "Allows you to knock down an enemy with a special shot once per infiltration.",
      },
      {
        Rank: "2",
        Name: "Bullet Hail",
        Description:
          "Chance to enter a gun-based All-out Attack after a successful ambush.",
      },
      {
        Rank: "3",
        Name: "Warning Shot",
        Description:
          "Able to scare enemies in negotiation to make it easier to obtain a Persona.",
      },
      {
        Rank: "5",
        Name: "Laced Bullets",
        Description:
          "Increases the success rate of an ailment-inflicting gunshot.",
      },
      {
        Rank: "6",
        Name: "Cheap Shot",
        Description:
          "Allows you to use Down Shot three times per infiltration.",
      },
      {
        Rank: "8",
        Name: "Electric Slug",
        Description: "Increases the damage inflicted by Bullet Hail.",
      },
      {
        Rank: "MAX",
        Name: "Oda Special",
        Description:
          "Allows Joker’s gun attacks to ignore resistances and hit the enemy.",
      },
    ],
    Events: [
      {
        Rank: 1,
        Responses: [
          [
            { Text: "Sure. ", Notes: 1 },
            { Text: "	Do we have to? ", Notes: 1 },
            { Text: "	Call me when it’s game time. ", Notes: 2 },
          ],
        ],
      },
      {
        Rank: 2,
        Responses: [
          [
            { Text: "Sorry… ", Notes: 2 },
            { Text: "	Don’t compare me to you. ", Notes: 3 },
            { Text: "	Praise would be encouraging. ", Notes: 0 },
          ],
          [
            { Text: "Let’s go. ", Notes: 0 },
            { Text: "	What a rude employee. ", Notes: 2 },
            { Text: "	Something bothering you? ", Notes: 0 },
          ],
          [
            { Text: "Are they strong? ", Notes: 0 },
            { Text: "	Do you admire them? ", Notes: 2 },
          ],
          [
            { Text: "So do I. ", Notes: 3 },
            { Text: "	They’re more than strong. ", Notes: 0 },
            { Text: "	I’ll let them know. ", Notes: 3 },
          ],
          [
            { Text: "I’ll work hard. ", Notes: 2 },
            { Text: "	If I feel like it. ", Notes: 0 },
            { Text: "	So then I can beat you? ", Notes: 2 },
          ],
        ],
      },
      {
        Rank: 3,
        Responses: [
          [
            { Text: "Did something happen? ", Notes: 0 },
            { Text: "	Let’s go eat. ", Notes: 0 },
            { Text: "	Are you fasting? ", Notes: 0 },
          ],
          [
            { Text: "OK. ", Notes: 0 },
            { Text: "	I’m not down with that. ", Notes: 0 },
            { Text: "	Let me think about it. ", Notes: 0 },
          ],
          [
            { Text: "Are they bullying you? ", Notes: 0 },
            { Text: "	Sounds like fun? ", Notes: 0 },
            { Text: "	You shouldn’t waste food. ", Notes: 0 },
          ],
          [
            { Text: "That’s the spirit. ", Notes: 2 },
            { Text: "	Want to learn martial arts? ", Notes: 0 },
            { Text: "	You really love your mom. ", Notes: 0 },
          ],
          [
            { Text: "Sure. ", Notes: 2 },
            { Text: "	If our schedules line up. ", Notes: 0 },
            { Text: "	Any food requests? ", Notes: 0 },
          ],
        ],
      },
      {
        Rank: 4,
        Responses: [
          [
            { Text: "Calm down. ", Notes: 0 },
            { Text: "	You’re being a sore loser. ", Notes: 0 },
            { Text: "	Yeah, you tell him! ", Notes: 2 },
          ],
          [
            { Text: "Don’t get so worked up. ", Notes: 0 },
            { Text: "	Get your revenge. ", Notes: 2 },
            { Text: "	Pros are amazing, huh? ", Notes: 0 },
          ],
        ],
      },
      {
        Rank: 5,
        Responses: [
          [
            { Text: "It was pretty weird. ", Notes: 3 },
            { Text: "	It happens. ", Notes: 0 },
            { Text: "	He must’ve rigged it. ", Notes: 3 },
          ],
          [
            { Text: "You think you have a chance? ", Notes: 0 },
            { Text: "	I’m sure you can do it. ", Notes: 2 },
            { Text: "	Don’t get so worked up. ", Notes: 0 },
          ],
          [
            { Text: "Are you going to give up? ", Notes: 2 },
            { Text: "	You need a new strategy. ", Notes: 3 },
          ],
          [
            { Text: "I’ll be cheering you on. ", Notes: 2 },
            { Text: "	You’re a sharp kid. ", Notes: 0 },
            { Text: "	Think you can take him? ", Notes: 2 },
          ],
        ],
      },
      {
        Rank: 6,
        Responses: [
          [
            { Text: "I can pay for myself. ", Notes: 0 },
            { Text: "	If you insist. ", Notes: 0 },
            { Text: "	Do you have enough? ", Notes: 0 },
          ],
          [
            { Text: "You should return the money. ", Notes: 0 },
            { Text: "	You’re acting like one. ", Notes: 0 },
          ],
          [
            { Text: "That’s good. ", Notes: 2 },
            { Text: "	I believe in you. ", Notes: 3 },
          ],
          [
            { Text: "A little bit. ", Notes: 0 },
            { Text: "	Not at all. ", Notes: 3 },
            { Text: "	I’m worried about you. ", Notes: 0 },
          ],
          [
            { Text: "Of course I won’t. ", Notes: 2 },
            { Text: "	That’s up to you. ", Notes: 0 },
            { Text: "	I’m your big brother, right? ", Notes: 0 },
          ],
        ],
      },
      {
        Rank: 7,
        Responses: [
          [
            { Text: "I haven’t done anything. ", Notes: 0 },
            { Text: "	Calm down. ", Notes: 0 },
            { Text: "	Bad influence? ", Notes: 0 },
          ],
          [
            { Text: "Take it easy on him. ", Notes: 0 },
            { Text: "	Think about his feelings. ", Notes: 0 },
          ],
          [
            { Text: "Bring it on, lady. ", Notes: 0 },
            { Text: "	I haven’t done anything. ", Notes: 0 },
            { Text: "	That wouldn’t be good. ", Notes: 0 },
          ],
          [
            { Text: "What’s your mom’s name? ", Notes: 0 },
            { Text: "	Tell me about your mom. ", Notes: 0 },
          ],
        ],
      },
      {
        Rank: 8,
        Responses: [
          [
            { Text: "She’s out to control. ", Notes: 0 },
            { Text: "	No, she’s not. ", Notes: 2 },
            { Text: "	Is that what you think? ", Notes: 2 },
          ],
          [
            { Text: "It’ll all work out. ", Notes: 2 },
            { Text: "	I can’t guarantee it. ", Notes: 0 },
            { Text: "	Believe in them. ", Notes: 3 },
          ],
          [
            { Text: "Is that too much for you? ", Notes: 0 },
            { Text: "	Way to step up. ", Notes: 0 },
          ],
          [
            { Text: "Let’s save her. ", Notes: 3 },
            { Text: "	That’s admirable. ", Notes: 3 },
          ],
        ],
      },
      {
        Rank: 9,
        Responses: [
          [
            { Text: "I’m glad to hear that. ", Notes: 3 },
            { Text: "	That’s hard to believe. ", Notes: 0 },
            { Text: "	Thank the Phantom Thieves. ", Notes: 2 },
          ],
          [
            { Text: "A little bit, yea. ", Notes: 2 },
            { Text: "	No, that makes sense. ", Notes: 3 },
            { Text: "	It means you’ve matured. ", Notes: 3 },
          ],
          [
            { Text: "He wants to win at all costs. ", Notes: 2 },
            { Text: "	He’s too lazy to practice. ", Notes: 0 },
            { Text: "	I wouldn’t know… ", Notes: 0 },
          ],
          [
            { Text: "Your wish came true. ", Notes: 2 },
            { Text: "	You really think It was them? ", Notes: 2 },
            { Text: "	You did a great job too. ", Notes: 2 },
          ],
        ],
      },
      {
        Rank: 10,
        Responses: [
          [
            { Text: "Thanks to my hard work. ", Notes: 2 },
            { Text: "	Thanks to my teacher. ", Notes: 3 },
          ],
          [
            { Text: "You got your revenge. ", Notes: 0 },
            { Text: "	You made things right. ", Notes: 3 },
            { Text: "	You made new friends. ", Notes: 3 },
          ],
          [
            { Text: "I’ll let you in. ", Notes: 0 },
            { Text: "	Ask them yourself. ", Notes: 0 },
          ],
        ],
      },
    ],
  },
];
