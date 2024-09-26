let currentScene = 0; // To track the current scene
let storyText = document.getElementById("story-text");
let choicesContainer = document.getElementById("choices");
let storyTitle = document.getElementById("story-title");
let magnifyingGlass = document.getElementById("magnifying-glass");

// Initialize the story
function startStory(storyType) {
    document.getElementById("intro-screen").classList.add("hidden");
    document.getElementById("game").classList.remove("hidden");
    if (storyType === 'crime') {
        showScene(0);
    }
}

// Function to show scenes based on current scene index
function showScene(sceneIndex) {
    currentScene = sceneIndex;
    storyText.innerHTML = ""; // Clear previous text
    choicesContainer.innerHTML = ""; // Clear previous choices

    // Call the appropriate scene
    switch (sceneIndex) {
        case 0:
            storyTitle.innerHTML = "The Heist";
            storyText.innerHTML = "You are a detective investigating a high-profile jewelry store robbery. As you arrive at the scene, you notice the shattered glass and scattered jewels. What do you do?";
            createChoices([
                { text: "Examine the crime scene.", nextScene: 1 },
                { text: "Interview witnesses.", nextScene: 2 }
            ]);
            break;

        case 1:
            storyText.innerHTML = "You carefully inspect the shattered glass and find a distinct shoe print nearby. It looks like a size 10 sneaker. What do you want to do next?";
            createChoices([
                { text: "Follow the shoe print.", nextScene: 3 },
                { text: "Take a photo and collect evidence.", nextScene: 4 }
            ]);
            break;

        case 2:
            storyText.innerHTML = "You gather a group of witnesses who saw the robbery. One of them, a nervous-looking man, claims he saw two masked individuals. What will you do?";
            createChoices([
                { text: "Ask for a description of the suspects.", nextScene: 5 },
                { text: "Show him a photo lineup.", nextScene: 6 }
            ]);
            break;

        case 3:
            storyText.innerHTML = "You follow the shoe print down a dark alley. Suddenly, you hear a noise behind you. Do you:";
            createChoices([
                { text: "Turn around and confront whoever is there.", nextScene: 7 },
                { text: "Continue following the print.", nextScene: 8 }
            ]);
            break;

        case 4:
            storyText.innerHTML = "You take a few photos of the evidence. As you turn to leave, you notice a strange man watching you from a distance. Do you:";
            createChoices([
                { text: "Approach the man and ask if he saw anything.", nextScene: 9 },
                { text: "Ignore him and leave.", nextScene: 10 }
            ]);
            break;

        case 5:
            storyText.innerHTML = "The man describes one of the suspects as tall and wearing a red hoodie. This information could be useful. What do you do next?";
            createChoices([
                { text: "Contact the precinct for a sketch artist.", nextScene: 11 },
                { text: "Search for security footage.", nextScene: 12 }
            ]);
            break;

        case 6:
            storyText.innerHTML = "You show him a photo lineup. He points out a familiar face. 'That's him!' he says, pointing to a man in the photo.";
            createChoices([
                { text: "Find this man immediately.", nextScene: 13 },
                { text: "Investigate the man's background.", nextScene: 14 }
            ]);
            break;

        case 7:
            storyText.innerHTML = "You turn around and see a shadowy figure darting away. You can:";
            createChoices([
                { text: "Chase after the figure.", nextScene: 15 },
                { text: "Call for backup.", nextScene: 16 }
            ]);
            break;

        case 8:
            storyText.innerHTML = "You decide to keep following the shoe print and find yourself at a suspicious warehouse. What do you do?";
            createChoices([
                { text: "Sneak inside to investigate.", nextScene: 17 },
                { text: "Call for backup before entering.", nextScene: 18 }
            ]);
            break;

        case 9:
            storyText.innerHTML = "As you approach, the man quickly walks away. Do you:";
            createChoices([
                { text: "Follow him to see where he goes.", nextScene: 19 },
                { text: "Call him back and demand answers.", nextScene: 20 }
            ]);
            break;

        case 10:
            storyText.innerHTML = "You decide it’s not worth the trouble and leave the scene, but you can't shake off the feeling that you've missed something crucial.";
            createChoices([
                { text: "Return to the crime scene.", nextScene: 0 }, // Loop back to first choice
                { text: "Go home and rest.", nextScene: 21 }
            ]);
            break;

        case 11:
            storyText.innerHTML = "You call the precinct and they send a sketch artist. While waiting, you realize this suspect might have connections to a local gang.";
            createChoices([
                { text: "Investigate the gang's known members.", nextScene: 22 },
                { text: "Wait for the sketch to be done.", nextScene: 23 }
            ]);
            break;

        case 12:
            storyText.innerHTML = "You find the security footage and see a glimpse of the suspects’ vehicle. It’s a black van with tinted windows.";
            createChoices([
                { text: "Run the plate number.", nextScene: 24 },
                { text: "Look for eyewitnesses who saw the van.", nextScene: 25 }
            ]);
            break;

        case 13:
            storyText.innerHTML = "You find the man at a local bar. He’s drinking alone and seems tense. Do you:";
            createChoices([
                { text: "Confront him about the robbery.", nextScene: 26 },
                { text: "Sit down and talk casually.", nextScene: 27 }
            ]);
            break;

        case 14:
            storyText.innerHTML = "You dig into the man’s background and discover he has a criminal record related to theft. This could be a lead.";
            createChoices([
                { text: "Look for connections to the robbery.", nextScene: 28 },
                { text: "Interview his known associates.", nextScene: 29 }
            ]);
            break;

        // Add more scenes as needed...

        case 15:
            storyText.innerHTML = "You sprint after the figure, but they quickly disappear into the shadows. As you catch your breath, you notice a nearby alley.";
            createChoices([
                { text: "Search the alley for clues.", nextScene: 30 },
                { text: "Report back to your team about the figure.", nextScene: 31 }
            ]);
            break;

        case 16:
            storyText.innerHTML = "You call for backup. A couple of officers arrive, and you describe what you saw. They suggest splitting up to cover more ground.";
            createChoices([
                { text: "Pair up with an officer to search the area.", nextScene: 32 },
                { text: "Stay at the scene and gather more evidence.", nextScene: 33 }
            ]);
            break;

        case 17:
            storyText.innerHTML = "You sneak inside the warehouse. Inside, you find crates labeled with a suspicious name. Suddenly, you hear footsteps approaching.";
            createChoices([
                { text: "Hide and observe.", nextScene: 34 },
                { text: "Draw your weapon and confront them.", nextScene: 35 }
            ]);
            break;

        case 18:
            storyText.innerHTML = "You call for backup before entering. A couple of officers join you outside, and you all enter the warehouse together.";
            createChoices([
                { text: "Search the crates for stolen items.", nextScene: 36 },
                { text: "Set up a perimeter and wait for more units.", nextScene: 37 }
            ]);
            break;

        case 19:
            storyText.innerHTML = "You follow the man into a nearby coffee shop. As you approach, you see him talking to someone suspicious. What do you do?";
            createChoices([
                { text: "Listen in on their conversation.", nextScene: 38 },
                { text: "Confront them right away.", nextScene: 39 }
            ]);
            break;

        case 20:
            storyText.innerHTML = "You call the man back, demanding answers. He looks startled but slowly walks toward you. 'What do you want?' he asks.";
            createChoices([
                { text: "Press him for information on the robbery.", nextScene: 40 },
                { text: "Accuse him of being involved.", nextScene: 41 }
            ]);
            break;

        case 21:
            storyText.innerHTML = "You head home, but the case weighs heavily on your mind. Suddenly, your phone rings. It's your partner.";
            createChoices([
                { text: "Answer the call.", nextScene: 42 },
                { text: "Ignore the call and rest.", nextScene: 43 }
            ]);
            break;

        case 22:
            storyText.innerHTML = "You start to look into the gang members. One in particular has a reputation for violence. You wonder if he's involved.";
            createChoices([
                { text: "Set up a meeting with informants.", nextScene: 44 },
                { text: "Go undercover to gather information.", nextScene: 45 }
            ]);
            break;

        case 23:
            storyText.innerHTML = "While waiting for the sketch, you overhear some officers talking about a similar robbery in another district.";
            createChoices([
                { text: "Investigate the other robbery.", nextScene: 46 },
                { text: "Stay focused on your current case.", nextScene: 47 }
            ]);
            break;

        case 24:
            storyText.innerHTML = "You run the plate number through the database and discover the vehicle is registered to a known criminal.";
            createChoices([
                { text: "Locate the criminal's last known address.", nextScene: 48 },
                { text: "Notify the precinct about your findings.", nextScene: 49 }
            ]);
            break;

        case 25:
            storyText.innerHTML = "You ask around the neighborhood and find a woman who remembers seeing the van parked near the jewelry store.";
            createChoices([
                { text: "Get more details from her.", nextScene: 50 },
                { text: "Report her information to your superior.", nextScene: 51 }
            ]);
            break;

        case 26:
            storyText.innerHTML = "You confront him about the robbery. He looks scared and says, 'I don’t know anything! Please, just leave me alone!'";
            createChoices([
                { text: "Intimidate him for more information.", nextScene: 52 },
                { text: "Back off and reassess your approach.", nextScene: 53 }
            ]);
            break;

        case 27:
            storyText.innerHTML = "You sit down and chat casually. He seems more relaxed now. Maybe you can get him to open up.";
            createChoices([
                { text: "Ask him about his connections.", nextScene: 54 },
                { text: "Change the subject to something personal.", nextScene: 55 }
            ]);
            break;

        case 28:
            storyText.innerHTML = "You dig deeper into his connections and find out he's been linked to various local gangs. This could lead to something big.";
            createChoices([
                { text: "Attempt to infiltrate one of these gangs.", nextScene: 56 },
                { text: "Contact your department for assistance.", nextScene: 57 }
            ]);
            break;

        case 29:
            storyText.innerHTML = "You decide to interview his known associates. They might know more about his involvement in the robbery.";
            createChoices([
                { text: "Visit one of the associates now.", nextScene: 58 },
                { text: "Wait for backup before proceeding.", nextScene: 59 }
            ]);
            break;

        // Add more scenes as needed...

        case 30:
            storyText.innerHTML = "You decide to search the alley for clues. The dim lighting makes it hard to see, but you notice something glinting in the trash.";
            createChoices([
                { text: "Investigate the glinting object.", nextScene: 60 },
                { text: "Ignore it and continue searching the alley.", nextScene: 61 }
            ]);
            break;

        case 31:
            storyText.innerHTML = "You report back to your team about the figure you saw. They quickly start setting up a perimeter to catch the suspect.";
            createChoices([
                { text: "Join them in the perimeter search.", nextScene: 62 },
                { text: "Stay at the precinct to gather more intel.", nextScene: 63 }
            ]);
            break;

        case 32:
            storyText.innerHTML = "You pair up with Officer Green, who has extensive experience in this area. 'We need to be careful,' she warns.";
            createChoices([
                { text: "Stick to the shadows and be stealthy.", nextScene: 64 },
                { text: "Split up to cover more ground.", nextScene: 65 }
            ]);
            break;

        case 33:
            storyText.innerHTML = "You decide to stay at the scene. As you sift through the evidence, you find a small but significant clue.";
            createChoices([
                { text: "Call your team to come review the clue.", nextScene: 66 },
                { text: "Try to decipher the clue on your own.", nextScene: 67 }
            ]);
            break;

        case 34:
            storyText.innerHTML = "You hide behind a crate, watching as two men discuss something in hushed tones. They seem to be planning something.";
            createChoices([
                { text: "Try to eavesdrop on their conversation.", nextScene: 68 },
                { text: "Get a better vantage point to see what they're doing.", nextScene: 69 }
            ]);
            break;

            case 35:
                storyText.innerHTML = "You try to eavesdrop on their conversation. One of the men mentions a big heist happening tomorrow at a luxury jewelry store. You're shocked by the boldness of the plan.";
                createChoices([
                    { text: "Stay hidden and listen for more details.", nextScene: 70 },
                    { text: "Leave quietly and report to your team.", nextScene: 71 }
                ]);
                break;
            
            case 36:
                storyText.innerHTML = "As you continue to listen, they reveal the time and entry point of the robbery. You've got crucial information but need to act fast before they notice you.";
                createChoices([
                    { text: "Follow the men to gather even more intel.", nextScene: 72 },
                    { text: "Leave now and inform your team.", nextScene: 73 }
                ]);
                break;
            
            case 37:
                storyText.innerHTML = "You quietly retreat and quickly call Officer Green. Together, you decide on a plan to intercept the robbers at the jewelry store before the heist begins.";
                createChoices([
                    { text: "Set up a sting operation at the store.", nextScene: 74 },
                    { text: "Follow the suspects further to track down their hideout.", nextScene: 75 }
                ]);
                break;
            
            case 38:
                storyText.innerHTML = "You follow the two men as they move deeper into the city. After a while, they stop at a rundown warehouse. It appears to be their hideout.";
                createChoices([
                    { text: "Call for backup and prepare for a raid.", nextScene: 76 },
                    { text: "Sneak inside the warehouse to gather evidence.", nextScene: 77 }
                ]);
                break;
            
            case 39:
                storyText.innerHTML = "You inform your team about the robbery plan. Officer Green advises setting up a perimeter around the jewelry store.";
                createChoices([
                    { text: "Set up surveillance around the store.", nextScene: 78 },
                    { text: "Request extra units for backup.", nextScene: 79 }
                ]);
                break;
            
            case 40:
                storyText.innerHTML = "You prepare your team for the sting operation. Surveillance cameras are set up, and everyone is on high alert. The robbers are expected to arrive any minute.";
                createChoices([
                    { text: "Move in early and catch them off guard.", nextScene: 80 },
                    { text: "Wait patiently for the robbers to make their move.", nextScene: 81 }
                ]);
                break;
            
            case 41:
                storyText.innerHTML = "You and Officer Green decide to follow the suspects further to find their hideout. After hours of tailing, you find yourself in a part of town known for criminal activity.";
                createChoices([
                    { text: "Keep following them.", nextScene: 82 },
                    { text: "Return and plan a raid.", nextScene: 83 }
                ]);
                break;
            
            case 42:
                storyText.innerHTML = "Backup arrives, and you raid the warehouse. Inside, you find blueprints for the jewelry store heist and several weapons. It's clear these men were planning something big.";
                createChoices([
                    { text: "Arrest everyone and interrogate them.", nextScene: 84 },
                    { text: "Search the warehouse for more evidence.", nextScene: 85 }
                ]);
                break;
            
            case 43:
                storyText.innerHTML = "You sneak into the warehouse and find a room filled with detailed plans of the heist. Just then, you hear footsteps approaching from behind.";
                createChoices([
                    { text: "Hide and wait to see who it is.", nextScene: 86 },
                    { text: "Confront the person directly.", nextScene: 87 }
                ]);
                break;
            
            case 44:
                storyText.innerHTML = "You and your team set up surveillance around the store. The robbers arrive as expected, and you wait for the right moment to intervene.";
                createChoices([
                    { text: "Let them break in, then catch them in the act.", nextScene: 88 },
                    { text: "Move in now and prevent the robbery.", nextScene: 89 }
                ]);
                break;
            
            case 45:
                storyText.innerHTML = "With extra units in place, you feel more confident about handling the situation. The robbers approach the store cautiously, unaware of the trap.";
                createChoices([
                    { text: "Surround the robbers and make the arrest.", nextScene: 90 },
                    { text: "Wait until they're inside before making your move.", nextScene: 91 }
                ]);
                break;
            
            case 46:
                storyText.innerHTML = "You decide to move in early. The robbers are caught off guard, but one of them manages to flee. Now you need to decide your next course of action.";
                createChoices([
                    { text: "Chase after the fleeing suspect.", nextScene: 92 },
                    { text: "Secure the scene and interrogate the others.", nextScene: 93 }
                ]);
                break;
            
            case 47:
                storyText.innerHTML = "You wait patiently as the robbers start their break-in. Just when they're inside, you and your team move in swiftly, taking them by surprise.";
                createChoices([
                    { text: "Arrest the robbers immediately.", nextScene: 94 },
                    { text: "Search for the missing suspect who got away.", nextScene: 95 }
                ]);
                break;
            
            case 48:
                storyText.innerHTML = "You continue following the suspects until they meet with a mysterious figure. It seems they're planning something much bigger than a simple heist.";
                createChoices([
                    { text: "Continue following to gather more intel.", nextScene: 96 },
                    { text: "Report back and prepare a larger operation.", nextScene: 97 }
                ]);
                break;
            
            case 49:
                storyText.innerHTML = "Deciding that it's too risky to continue tailing the suspects, you return to HQ and prepare for a full-scale raid. The next move must be strategic.";
                createChoices([
                    { text: "Organize a raid on the warehouse.", nextScene: 98 },
                    { text: "Plan a sting operation at their next target.", nextScene: 99 }
                ]);
                break;
            


                case 50:
    storyText.innerHTML = "You arrest everyone in the warehouse and start interrogating the suspects. One of them slips up and mentions a second hideout across town. This could be crucial information.";
    createChoices([
        { text: "Focus on interrogating this suspect further.", nextScene: 100 },
        { text: "Send a team to investigate the second hideout.", nextScene: 101 }
    ]);
    break;

case 51:
    storyText.innerHTML = "You search the warehouse and find maps and photographs of a high-security vault. It looks like they're planning a much bigger job than you initially thought.";
    createChoices([
        { text: "Take the evidence back to HQ for analysis.", nextScene: 102 },
        { text: "Stay in the warehouse to gather more evidence.", nextScene: 103 }
    ]);
    break;

case 52:
    storyText.innerHTML = "You hide behind some crates as footsteps approach. Two men walk into the warehouse, discussing their next move. They're talking about the jewelry heist and another operation in the works.";
    createChoices([
        { text: "Confront the men and arrest them.", nextScene: 104 },
        { text: "Wait and listen for more information.", nextScene: 105 }
    ]);
    break;

case 53:
    storyText.innerHTML = "You step out and confront the person, who turns out to be one of the robbers. A brief struggle ensues, but you're able to subdue him. He's carrying important documents about the heist.";
    createChoices([
        { text: "Interrogate him on the spot.", nextScene: 106 },
        { text: "Call for backup and secure the scene.", nextScene: 107 }
    ]);
    break;

case 54:
    storyText.innerHTML = "You let the robbers break into the store before moving in to arrest them. They're caught completely off guard, but you notice that one of them is carrying a strange device.";
    createChoices([
        { text: "Confiscate the device and investigate.", nextScene: 108 },
        { text: "Ignore the device and focus on the arrest.", nextScene: 109 }
    ]);
    break;

case 55:
    storyText.innerHTML = "You decide to move in before they enter the store. The robbers resist, and a shootout ensues. You manage to capture them, but you're left wondering if there are more accomplices.";
    createChoices([
        { text: "Search the area for more suspects.", nextScene: 110 },
        { text: "Interrogate the arrested robbers.", nextScene: 111 }
    ]);
    break;

case 56:
    storyText.innerHTML = "You surround the robbers and arrest them without incident. They seem surprised but not entirely worried. There's something bigger going on.";
    createChoices([
        { text: "Search the robbers for clues.", nextScene: 112 },
        { text: "Transport them to HQ for further questioning.", nextScene: 113 }
    ]);
    break;

case 57:
    storyText.innerHTML = "You wait for the robbers to break into the store before making your move. Just as you're about to arrest them, one of them mentions a 'Plan B'. Something doesn't feel right.";
    createChoices([
        { text: "Abort the arrest and investigate Plan B.", nextScene: 114 },
        { text: "Proceed with the arrest.", nextScene: 115 }
    ]);
    break;

case 58:
    storyText.innerHTML = "You chase after the fleeing suspect through the dark streets. You finally catch up to him in an alleyway, but he’s not alone—another figure steps out from the shadows.";
    createChoices([
        { text: "Confront both suspects.", nextScene: 116 },
        { text: "Retreat and call for backup.", nextScene: 117 }
    ]);
    break;

case 59:
    storyText.innerHTML = "You secure the scene and start interrogating the arrested robbers. One of them cracks and gives up the location of a warehouse where the rest of the loot is stored.";
    createChoices([
        { text: "Head to the warehouse immediately.", nextScene: 118 },
        { text: "Send a team to investigate while you continue questioning.", nextScene: 119 }
    ]);
    break;



    case 60:
        storyText.innerHTML = "You carefully approach the glinting object, pulling it from the trash. It's a small, ornate keychain, engraved with a unique symbol. Just then, you hear footsteps behind you.";
        createChoices([
            { text: "Hide the keychain and sneak away.", nextScene: 120 },
            { text: "Show the keychain to Officer Green.", nextScene: 121 }
        ]);
        break;
    
    case 61:
        storyText.innerHTML = "As you continue your search, you come across a local resident. He looks anxious and seems to be watching something.";
        createChoices([
            { text: "Approach him and ask about the robbery.", nextScene: 122 },
            { text: "Ignore him and keep searching.", nextScene: 123 }
        ]);
        break;
    
    case 62:
        storyText.innerHTML = "You join the perimeter search with Officer Green. After a while, you spot a suspicious figure trying to slip away into a crowd.";
        createChoices([
            { text: "Chase after the figure.", nextScene: 124 },
            { text: "Call for backup and wait.", nextScene: 125 }
        ]);
        break;
    
    case 63:
        storyText.innerHTML = "While gathering intel at the precinct, you discover a lead about the jewelry store's previous owners. They may have connections to the robbery.";
        createChoices([
            { text: "Investigate their last known address.", nextScene: 126 },
            { text: "Contact them and ask for an interview.", nextScene: 127 }
        ]);
        break;
    
    case 64:
        storyText.innerHTML = "You and Officer Green move stealthily, using the shadows to your advantage. Suddenly, you overhear a couple of thugs discussing their plans to fence the stolen jewelry.";
        createChoices([
            { text: "Try to gather more information by eavesdropping.", nextScene: 128 },
            { text: "Notify your team of the situation.", nextScene: 129 }
        ]);
        break;
    
    


        case 65:
            storyText.innerHTML = "You confront the shady figure from the security footage. He seems nervous and avoids eye contact.";
            createChoices([
                { text: "Press him for information.", nextScene: 130 },
                { text: "Back off and observe.", nextScene: 131 }
            ]);
            break;
        
        case 66:
            storyText.innerHTML = "Under pressure, the figure admits to seeing someone enter the jewelry store just before the robbery.";
            createChoices([
                { text: "Ask for a description.", nextScene: 132 },
                { text: "Threaten him for more details.", nextScene: 133 }
            ]);
            break;
        
        case 67:
            storyText.innerHTML = "You decide to watch him from a distance. You see him meet another person, exchanging something.";
            createChoices([
                { text: "Follow them discreetly.", nextScene: 134 },
                { text: "Take a picture for evidence.", nextScene: 135 }
            ]);
            break;
        
        case 68:
            storyText.innerHTML = "The figure describes a tall man with a tattoo on his neck. You realize this matches the suspect in another case. You quickly alert your team to set up a perimeter around the area.";
            createChoices([
                { text: "Join the perimeter team to catch the suspect.", nextScene: 136 },
                { text: "Stay back and gather more intel.", nextScene: 137 }
            ]);
            break;
        
        case 69:
            storyText.innerHTML = "You threaten the figure, causing him to panic and run. You have lost a potential witness, and now you have to decide how to proceed.";
            createChoices([
                { text: "Chase after him to get more information.", nextScene: 138 },
                { text: "Return to the station to regroup and strategize.", nextScene: 139 }
            ]);
            break;
        
        case 70:
            storyText.innerHTML = "You quickly hide the keychain in your pocket and slip away from the scene. Officer Green seems distracted by another lead. As you walk away, you spot a woman named Claire, who is known to have connections with the local jewelry scene.";
            createChoices([
                { text: "Approach Claire and ask her about the robbery.", nextScene: 140 },
                { text: "Continue to investigate alone.", nextScene: 141 }
            ]);
            break;
        
        case 71:
            storyText.innerHTML = "You decide to show the keychain to Officer Green. He examines it closely and raises an eyebrow. 'This symbol looks familiar. It might belong to a local gang known for stealing.'";
            createChoices([
                { text: "Ask Officer Green about the gang.", nextScene: 142 },
                { text: "Suggest setting a trap for them.", nextScene: 143 }
            ]);
            break;
        
        case 72:
            storyText.innerHTML = "You walk up to the anxious resident. 'What’s got you so jumpy?' you ask. He looks around nervously before replying, 'I saw something... a suspicious car parked near the jewelry store the night of the robbery.'";
            createChoices([
                { text: "Get details about the car.", nextScene: 144 },
                { text: "Thank him and move on.", nextScene: 145 }
            ]);
            break;
        
        case 73:
            storyText.innerHTML = "You ignore him and keep searching. As you walk further, you bump into a street artist, Marcus, who seems to have seen everything that goes on in the neighborhood.";
            createChoices([
                { text: "Ask Marcus if he witnessed anything unusual.", nextScene: 146 },
                { text: "Bribe Marcus for information.", nextScene: 147 }
            ]);
            break;
        
        case 74:
            storyText.innerHTML = "You decide to chase after the figure. You sprint down the street, weaving through crowds. As you gain on him, you recognize him as a known petty thief.";
            createChoices([
                { text: "Confront the thief directly.", nextScene: 148 },
                { text: "Call for backup while pursuing.", nextScene: 149 }
            ]);
            break;
        
        case 75:
            storyText.innerHTML = "You call for backup and wait. Officer Green arrives just in time. Together, you spot the thief attempting to slip into an alley.";
            createChoices([
                { text: "Follow the thief into the alley.", nextScene: 150 },
                { text: "Surround the alley and catch him off guard.", nextScene: 151 }
            ]);
            break;
        

            case 76:
                storyText.innerHTML = "You head to the last known address of the previous jewelry store owners. The house is old and rundown. You knock on the door, and a frail old man opens it.";
                createChoices([
                    { text: "Introduce yourself and ask about the robbery.", nextScene: 152 },
                    { text: "Demand answers aggressively.", nextScene: 153 }
                ]);
                break;
            
            case 77:
                storyText.innerHTML = "You decide to contact the previous owners for an interview. They agree to meet you at a local café. When you arrive, they look wary and guarded.";
                createChoices([
                    { text: "Try to build rapport with them.", nextScene: 154 },
                    { text: "Jump straight to the robbery questions.", nextScene: 155 }
                ]);
                break;
            
            case 78:
                storyText.innerHTML = "You try to eavesdrop on the thugs. They mention a location where they plan to sell the stolen jewelry. This could be a vital clue!";
                createChoices([
                    { text: "Plan a raid on that location.", nextScene: 156 },
                    { text: "Inform Officer Green and prepare a sting operation.", nextScene: 157 }
                ]);
                break;
            
            case 79:
                storyText.innerHTML = "You notify your team of the situation. They decide to set up surveillance on the thugs to gather more information. Your instincts tell you this could be the break you need.";
                createChoices([
                    { text: "Join the surveillance team.", nextScene: 158 },
                    { text: "Stay behind and investigate further alone.", nextScene: 159 }
                ]);
                break;
            
            case 80:
                storyText.innerHTML = "You approach Claire, and she gives you a skeptical look. 'Why should I help you, detective?' she asks. You know she has valuable information but need to gain her trust.";
                createChoices([
                    { text: "Offer to help her with a personal issue in exchange for information.", nextScene: 160 },
                    { text: "Bribe her with cash.", nextScene: 161 }
                ]);
                break;
            
            case 81:
                storyText.innerHTML = "You decide to investigate alone. As you walk through the neighborhood, you notice a suspicious-looking car parked near an abandoned warehouse. Something feels off.";
                createChoices([
                    { text: "Approach the car quietly to inspect it.", nextScene: 162 },
                    { text: "Call Officer Green for backup before proceeding.", nextScene: 163 }
                ]);
                break;
            
            case 82:
                storyText.innerHTML = "Officer Green explains, 'This gang is known for their ruthless methods. They might be connected to several unsolved cases. If you have a lead, we need to act quickly.'";
                createChoices([
                    { text: "Suggest setting up an undercover operation.", nextScene: 164 },
                    { text: "Ask for more details about the gang's activities.", nextScene: 165 }
                ]);
                break;
            
            case 83:
                storyText.innerHTML = "You suggest a trap to catch the gang. Officer Green nods, 'We can set up a meeting with a known associate. It’s risky, but it might yield results.'";
                createChoices([
                    { text: "Prepare for the operation immediately.", nextScene: 166 },
                    { text: "Gather more intelligence before making a move.", nextScene: 167 }
                ]);
                break;
            
            case 84:
                storyText.innerHTML = "The anxious resident describes the car in detail. 'It was an old black sedan with a broken tail light. I swear I saw it parked outside the jewelry store the night of the robbery.'";
                createChoices([
                    { text: "Thank him and check security footage from nearby shops.", nextScene: 168 },
                    { text: "Investigate the area where the car was parked.", nextScene: 169 }
                ]);
                break;
            
            case 85:
                storyText.innerHTML = "You thank the resident for his time and continue your search. Just as you're about to turn the corner, you overhear two men discussing the robbery.";
                createChoices([
                    { text: "Try to eavesdrop on their conversation.", nextScene: 170 },
                    { text: "Confront them about what they know.", nextScene: 171 }
                ]);
                break;
            
            case 86:
                storyText.innerHTML = "Marcus, the street artist, looks thoughtful. 'I might have seen something, but I don't want to get involved. The cops don't protect us here.' You can sense his fear.";
                createChoices([
                    { text: "Reassure Marcus that you can keep him safe.", nextScene: 172 },
                    { text: "Offer him a deal: information for immunity.", nextScene: 173 }
                ]);
                break;
            

                case 87:
                    storyText.innerHTML = "You slide a few bills into Marcus's palm. He hesitates, then whispers, 'I saw a guy leaving the store just before it was robbed. He was acting suspicious.'";
                    createChoices([
                        { text: "Ask Marcus for a description of the guy.", nextScene: 174 },
                        { text: "Rush to the scene of the robbery for evidence.", nextScene: 175 }
                    ]);
                    break;
                
                case 88:
                    storyText.innerHTML = "You confront the thief, who looks startled. 'What do you want, detective? I’m just a guy trying to survive here.'";
                    createChoices([
                        { text: "Demand to know what he knows about the robbery.", nextScene: 176 },
                        { text: "Intimidate him to get answers.", nextScene: 177 }
                    ]);
                    break;
                
                case 89:
                    storyText.innerHTML = "You call for backup and Officer Green arrives shortly. Together, you corner the thief, who has nowhere to run.";
                    createChoices([
                        { text: "Interrogate the thief about the robbery.", nextScene: 178 },
                        { text: "Let Officer Green handle him while you scout the area.", nextScene: 179 }
                    ]);
                    break;
                
                case 90:
                    storyText.innerHTML = "You and Officer Green sneak into the alley after the thief. He looks panicked and is about to make a run for it.";
                    createChoices([
                        { text: "Block his escape and force him to talk.", nextScene: 180 },
                        { text: "Offer him a deal in exchange for information.", nextScene: 181 }
                    ]);
                    break;
                
                case 91:
                    storyText.innerHTML = "You signal Officer Green to block off the alley. The thief tries to escape but is caught. 'You're in deep trouble now,' you say.";
                    createChoices([
                        { text: "Take him in for questioning.", nextScene: 182 },
                        { text: "Try to convince him to cooperate.", nextScene: 183 }
                    ]);
                    break;
                
                case 92:
                    storyText.innerHTML = "The thief is visibly shaken. 'I didn't want to do it! They forced me to help them!' he pleads.";
                    createChoices([
                        { text: "Ask who forced him into it.", nextScene: 184 },
                        { text: "Accuse him of lying and push for more details.", nextScene: 185 }
                    ]);
                    break;
                
                case 93:
                    storyText.innerHTML = "He reveals a name: 'Victor. He's the one behind it all. If I talk, I'm dead!' You can sense the fear in his eyes.";
                    createChoices([
                        { text: "Reassure him that you'll protect him if he helps.", nextScene: 186 },
                        { text: "Promise him a deal if he gives you information.", nextScene: 187 }
                    ]);
                    break;
                
                case 94:
                    storyText.innerHTML = "The thief nods nervously, knowing he has no choice. 'I’ll tell you everything I know. But you have to keep me safe.'";
                    createChoices([
                        { text: "Take him to a secure location for protection.", nextScene: 188 },
                        { text: "Tell him to meet you later at a safe place.", nextScene: 189 }
                    ]);
                    break;
                
                case 95:
                    storyText.innerHTML = "As you leave the alley, you bump into Claire again. 'What did you find out?' she asks, her curiosity piqued.";
                    createChoices([
                        { text: "Share the information about Victor with her.", nextScene: 190 },
                        { text: "Keep the information to yourself for now.", nextScene: 191 }
                    ]);
                    break;
                
                case 96:
                    storyText.innerHTML = "You decide to bring Claire in on the case. 'Victor is the one running this operation. We need to stop him.'";
                    createChoices([
                        { text: "Plan a sting operation to catch Victor.", nextScene: 192 },
                        { text: "Investigate Victor's whereabouts before acting.", nextScene: 193 }
                    ]);
                    break;
                
                case 97:
                    storyText.innerHTML = "After some discussions, Claire suggests reaching out to an old informant who might have more information about Victor.";
                    createChoices([
                        { text: "Agree and make the call to the informant.", nextScene: 194 },
                        { text: "Decline and rely on what you have.", nextScene: 195 }
                    ]);
                    break;
                
                case 98:
                    storyText.innerHTML = "You call the informant, a woman named Sofia. 'I know Victor well,' she says. 'But he's dangerous. Be careful.'";
                    createChoices([
                        { text: "Ask Sofia for any intel she has on Victor.", nextScene: 196 },
                        { text: "Request her help to lure Victor into a trap.", nextScene: 197 }
                    ]);
                    break;
                
                case 99:
                    storyText.innerHTML = "Sofia shares that Victor has been meeting with some high-profile clients. 'If you can get close to one of them, you might catch him.'";
                    createChoices([
                        { text: "Try to get an invitation to one of Victor's meetings.", nextScene: 198 },
                        { text: "Set up surveillance to gather intel on the meetings.", nextScene: 199 }
                    ]);
                    break;
                

                    case 100:
                        storyText.innerHTML = "You decide to go undercover at a local bar where Victor is known to frequent. It’s a risky move but could pay off.";
                        createChoices([
                            { text: "Change your appearance and head to the bar.", nextScene: 200 },
                            { text: "Take Officer Green with you for backup.", nextScene: 201 }
                        ]);
                        break;
            
                    case 101:
                        storyText.innerHTML = "You approach the bar, feeling a mix of excitement and dread. Inside, the atmosphere is thick with tension and whispers.";
                        createChoices([
                            { text: "Order a drink and scan the room for Victor.", nextScene: 202 },
                            { text: "Engage in conversation with the bartender for information.", nextScene: 203 }
                        ]);
                        break;
            
                    case 102:
                        storyText.innerHTML = "You notice a man in the corner that looks suspicious. He seems to be keeping an eye on everyone, especially you.";
                        createChoices([
                            { text: "Approach him and ask if he knows Victor.", nextScene: 204 },
                            { text: "Pretend to ignore him and observe his behavior.", nextScene: 205 }
                        ]);
                        break;
            
                    case 103:
                        storyText.innerHTML = "As you prepare to confront the man, he suddenly stands up and heads towards the exit, trying to slip away.";
                        createChoices([
                            { text: "Follow him outside.", nextScene: 206 },
                            { text: "Alert Officer Green to follow discreetly.", nextScene: 207 }
                        ]);
                        break;
            
                    case 104:
                        storyText.innerHTML = "Outside, you spot the man getting into a sleek black car. Your instincts tell you he’s connected to Victor.";
                        createChoices([
                            { text: "Take a picture of the license plate.", nextScene: 208 },
                            { text: "Try to memorize the car's details and follow it.", nextScene: 209 }
                        ]);
                        break;
            
                    case 105:
                        storyText.innerHTML = "You decide to follow the car from a distance. It leads you to an abandoned warehouse on the outskirts of town.";
                        createChoices([
                            { text: "Scout the area for a way inside.", nextScene: 210 },
                            { text: "Wait for backup before approaching.", nextScene: 211 }
                        ]);
                        break;
            
                    case 106:
                        storyText.innerHTML = "As you approach the warehouse, you overhear voices inside. One of them sounds like Victor. Your heart races.";
                        createChoices([
                            { text: "Try to eavesdrop on the conversation.", nextScene: 212 },
                            { text: "Look for a back entrance to sneak inside.", nextScene: 213 }
                        ]);
                        break;
            
                    case 107:
                        storyText.innerHTML = "You crouch behind some crates, straining to hear. Victor's voice cuts through the air: 'We need to make sure the heist goes smoothly this time.'";
                        createChoices([
                            { text: "Record the conversation on your phone.", nextScene: 214 },
                            { text: "Leave and call for backup immediately.", nextScene: 215 }
                        ]);
                        break;
            
                    case 108:
                        storyText.innerHTML = "Suddenly, you hear footsteps approaching. You duck behind the crates just in time as two men walk past, armed and looking for trouble.";
                        createChoices([
                            { text: "Follow them to gather more information.", nextScene: 216 },
                            { text: "Stay hidden and wait for them to leave.", nextScene: 217 }
                        ]);
                        break;
            
                    case 109:
                        storyText.innerHTML = "You decide to follow them, carefully keeping your distance. They lead you to a hidden back room filled with stolen jewelry.";
                        createChoices([
                            { text: "Take pictures of the stolen goods as evidence.", nextScene: 218 },
                            { text: "Look for a way to sabotage their operation.", nextScene: 219 }
                        ]);
                        break;
            
                    case 110:
                        storyText.innerHTML = "As you snap photos, you accidentally knock over a crate, creating a loud noise. The men whirl around, alert.";
                        createChoices([
                            { text: "Run and find a hiding spot.", nextScene: 220 },
                            { text: "Confront them and reveal yourself as a detective.", nextScene: 221 }
                        ]);
                        break;
            
                    case 111:
                        storyText.innerHTML = "You dash behind some barrels as the men rush toward the sound. 'Check it out!' one shouts, heart pounding.";
                        createChoices([
                            { text: "Use this distraction to escape.", nextScene: 222 },
                            { text: "Wait and see what they find.", nextScene: 223 }
                        ]);
                        break;
            
                    case 112:
                        storyText.innerHTML = "You decide to stay hidden. The men discover the fallen crate but don't see you. They begin to argue about what to do next.";
                        createChoices([
                            { text: "Listen to their argument for more information.", nextScene: 224 },
                            { text: "Take the opportunity to sneak away unnoticed.", nextScene: 225 }
                        ]);
                        break;
            
                        case 113:
                            storyText.innerHTML = "From your hiding spot, you hear one of them say, 'We can't let Victor know about this. If he finds out, we're dead!'";
                            createChoices([
                                { text: "Eavesdrop further to learn about Victor's plans.", nextScene: 226 },
                                { text: "Leave and report this to Claire.", nextScene: 227 }
                            ]);
                            break;
                
                        case 114:
                            storyText.innerHTML = "Suddenly, you hear a loud crash. A third figure appears – it's Claire! 'What the hell are you doing here?' she whispers angrily.";
                            createChoices([
                                { text: "Explain your plan to catch Victor.", nextScene: 228 },
                                { text: "Tell her to leave before they find her.", nextScene: 229 }
                            ]);
                            break;
                
                        case 115:
                            storyText.innerHTML = "You quickly fill her in on the situation. She looks shocked but nods in understanding. 'We need to take them down together.'";
                            createChoices([
                                { text: "Plan a surprise attack on the men.", nextScene: 230 },
                                { text: "Attempt to gather more intel before acting.", nextScene: 231 }
                            ]);
                            break;
                
                        case 116:
                            storyText.innerHTML = "You and Claire decide to wait for the right moment. As the men argue, you notice a strange symbol on one of their jackets.";
                            createChoices([
                                { text: "Ask Claire about the symbol.", nextScene: 232 },
                                { text: "Draw the symbol to remember later.", nextScene: 233 }
                            ]);
                            break;
                
                        case 117:
                            storyText.innerHTML = "Claire’s face pales. 'That’s the mark of a notorious gang. They’re connected to Victor.' This complicates things.";
                            createChoices([
                                { text: "Change your plan and leave now.", nextScene: 234 },
                                { text: "Confront them with the information.", nextScene: 235 }
                            ]);
                            break;
                
                        case 118:
                            storyText.innerHTML = "Just then, one of the men pulls out a phone and starts dialing. 'We need to call Victor now!' he says.";
                            createChoices([
                                { text: "Intercept the call and gather more intel.", nextScene: 236 },
                                { text: "Rush them before they can contact Victor.", nextScene: 237 }
                            ]);
                            break;
                
                        case 119:
                            storyText.innerHTML = "You choose to intercept the call, stepping out from your hiding spot. 'I wouldn't do that if I were you.'";
                            createChoices([
                                { text: "Intimidate them into revealing their plans.", nextScene: 238 },
                                { text: "Try to negotiate a deal with them.", nextScene: 239 }
                            ]);
                            break;
                
                        case 120:
                            storyText.innerHTML = "As you confront the men, they look shocked. 'Who the hell are you?' one snarls, reaching for a weapon.";
                            createChoices([
                                { text: "Draw your weapon and stand your ground.", nextScene: 240 },
                                { text: "Try to defuse the situation with words.", nextScene: 241 }
                            ]);
                            break;
                
                        case 121:
                            storyText.innerHTML = "Suddenly, the warehouse door bursts open, and a SWAT team storms in, led by Officer Green! 'Hands in the air!' they shout.";
                            createChoices([
                                { text: "Join the SWAT team in subduing the criminals.", nextScene: 242 },
                                { text: "Try to find Victor among the chaos.", nextScene: 243 }
                            ]);
                            break;
                

                            case 141:
                                storyText.innerHTML = "You chase after the closest figure, adrenaline pumping through your veins. You’re determined not to let them escape!";
                                createChoices([ 
                                    { text: "Use your agility to close the gap quickly.", nextScene: 222 }, 
                                    { text: "Call for backup while pursuing.", nextScene: 223 } 
                                ]);
                                break;
                    
                            case 142:
                                storyText.innerHTML = "As you near the fleeing figure, you realize it’s one of Victor’s gang members. They’re fast, but you’re faster!";
                                createChoices([ 
                                    { text: "Tackle them to the ground.", nextScene: 224 }, 
                                    { text: "Try to corner them against a wall.", nextScene: 225 } 
                                ]);
                                break;
                    
                            case 143:
                                storyText.innerHTML = "With a burst of speed, you tackle the gang member to the ground. 'Where's Victor?!' you demand.";
                                createChoices([ 
                                    { text: "Intimidate them to get answers.", nextScene: 226 }, 
                                    { text: "Search them for weapons and information.", nextScene: 227 } 
                                ]);
                                break;
                    
                            case 144:
                                storyText.innerHTML = "The gang member looks terrified. 'I-I don’t know! He just ran!' they stammer, trying to squirm away.";
                                createChoices([ 
                                    { text: "Press harder for information.", nextScene: 228 }, 
                                    { text: "Call Officer Green to take them into custody.", nextScene: 229 } 
                                ]);
                                break;
                    
                            case 145:
                                storyText.innerHTML = "You realize time is of the essence. You can’t let Victor slip away again!";
                                createChoices([ 
                                    { text: "Decide to pursue Victor again immediately.", nextScene: 230 }, 
                                    { text: "Use the radio to coordinate with the SWAT team.", nextScene: 231 } 
                                ]);
                                break;
                    
                            case 146:
                                storyText.innerHTML = "You head back toward the warehouse entrance, scanning for any signs of Victor’s escape route.";
                                createChoices([ 
                                    { text: "Look for clues to where he might have gone.", nextScene: 232 }, 
                                    { text: "Gather the remaining SWAT members for a search.", nextScene: 233 } 
                                ]);
                                break;
                    
                            case 147:
                                storyText.innerHTML = "You notice a trail of footprints leading out the back. This could be your only lead!";
                                createChoices([ 
                                    { text: "Follow the footprints cautiously.", nextScene: 234 }, 
                                    { text: "Set a perimeter to catch him if he doubles back.", nextScene: 235 } 
                                ]);
                                break;
                    
                            case 148:
                                storyText.innerHTML = "Following the footprints, you come to a secluded alley. It looks quiet, but you can't let your guard down.";
                                createChoices([ 
                                    { text: "Check behind the dumpsters for Victor.", nextScene: 236 }, 
                                    { text: "Wait and listen for any sounds.", nextScene: 237 } 
                                ]);
                                break;
                    
                            case 149:
                                storyText.innerHTML = "As you peek around the dumpster, you spot Victor crouched down, looking around nervously.";
                                createChoices([ 
                                    { text: "Confront him now!", nextScene: 238 }, 
                                    { text: "Try to sneak up on him for a surprise.", nextScene: 239 } 
                                ]);
                                break;
                    
                            case 150:
                                storyText.innerHTML = "You decide to confront Victor. 'It’s over, Victor! There’s nowhere to run!' you shout.";
                                createChoices([ 
                                    { text: "Demand he gives up peacefully.", nextScene: 240 }, 
                                    { text: "Prepare to take him down if he resists.", nextScene: 241 } 
                                ]);
                                break;
                    
                            case 151:
                                storyText.innerHTML = "Victor stands up, a mixture of fear and defiance in his eyes. 'I won’t go back to prison!' he shouts.";
                                createChoices([ 
                                    { text: "Try to negotiate his surrender.", nextScene: 242 }, 
                                    { text: "Prepare for a confrontation.", nextScene: 243 } 
                                ]);
                                break;
                    
                            case 152:
                                storyText.innerHTML = "Victor hesitates, glancing around as if looking for an escape route. This could be your chance.";
                                createChoices([ 
                                    { text: "Make a bold move to disarm him.", nextScene: 244 }, 
                                    { text: "Offer him a way out if he cooperates.", nextScene: 245 } 
                                ]);
                                break;

                                case 153:
                                    storyText.innerHTML = "You make a bold move to disarm him, lunging forward in a swift motion. Victor’s eyes widen in surprise.";
                                    createChoices([
                                        { text: "Attempt to grab the gun from his hand.", nextScene: 246 },
                                        { text: "Kick his legs out from under him.", nextScene: 247 }
                                    ]);
                                    break;
                        
                                case 154:
                                    storyText.innerHTML = "As you reach for the gun, Victor instinctively pulls back. 'Don't come any closer!' he yells, panic evident in his voice.";
                                    createChoices([
                                        { text: "Keep talking to him, trying to calm him down.", nextScene: 248 },
                                        { text: "Feign a distraction to catch him off guard.", nextScene: 249 }
                                    ]);
                                    break;
                        
                                case 155:
                                    storyText.innerHTML = "You choose to offer him a way out. 'If you cooperate, we can find a solution that keeps you safe.'";
                                    createChoices([
                                        { text: "Suggest he can help take down the gang.", nextScene: 250 },
                                        { text: "Promise protection if he surrenders now.", nextScene: 251 }
                                    ]);
                                    break;
                        
                                case 156:
                                    storyText.innerHTML = "Victor’s expression shifts as he considers your words. 'What do you mean by protection?' he asks, curiosity mixed with fear.";
                                    createChoices([
                                        { text: "Explain the deal you can arrange.", nextScene: 252 },
                                        { text: "Reassure him that he won't be alone.", nextScene: 253 }
                                    ]);
                                    break;
                        
                                case 157:
                                    storyText.innerHTML = "Meanwhile, you hear the gang members getting closer. Time is running out!";
                                    createChoices([
                                        { text: "Make a final push to convince Victor.", nextScene: 254 },
                                        { text: "Prepare for the confrontation with the gang.", nextScene: 255 }
                                    ]);
                                    break;
                        
                                case 158:
                                    storyText.innerHTML = "You spring the trap, confronting the gang members as they rush past. They are taken aback!";
                                    createChoices([
                                        { text: "Call for backup while confronting them.", nextScene: 256 },
                                        { text: "Try to intimidate them into surrendering.", nextScene: 257 }
                                    ]);
                                    break;
                        
                                case 159:
                                    storyText.innerHTML = "The gang members hesitate, their bravado fading as they realize they’ve been caught off guard.";
                                    createChoices([
                                        { text: "Seize the moment and charge at them.", nextScene: 258 },
                                        { text: "Order them to put their hands up.", nextScene: 259 }
                                    ]);
                                    break;
                        
                                case 160:
                                    storyText.innerHTML = "You decide to follow them stealthily, keeping a safe distance to gather information on their plans.";
                                    createChoices([
                                        { text: "Eavesdrop on their conversation.", nextScene: 260 },
                                        { text: "Signal to Officer Green for assistance.", nextScene: 261 }
                                    ]);
                                    break;
                        
                                case 161:
                                    storyText.innerHTML = "As you stealthily trail the gang, you hear snippets of their discussion about a secret deal.";
                                    createChoices([
                                        { text: "Get closer to hear more details.", nextScene: 262 },
                                        { text: "Backtrack to inform your team.", nextScene: 263 }
                                    ]);
                                    break;
                        
                                case 162:
                                    storyText.innerHTML = "You eavesdrop carefully, catching a mention of a location where they plan to meet their boss.";
                                    createChoices([
                                        { text: "Make a note of the location for later.", nextScene: 264 },
                                        { text: "Rush back to share the intel with Officer Green.", nextScene: 265 }
                                    ]);
                                    break;
                        
                                case 163:
                                    storyText.innerHTML = "Deciding to get closer, you step quietly, but a loose board creaks underfoot. The gang turns!";
                                    createChoices([
                                        { text: "Run and hide behind a nearby dumpster.", nextScene: 266 },
                                        { text: "Stand your ground and confront them.", nextScene: 267 }
                                    ]);
                                    break;
                        
                                case 164:
                                    storyText.innerHTML = "You manage to hide just in time. The gang members start searching for the source of the noise.";
                                    createChoices([
                                        { text: "Wait for them to disperse before moving.", nextScene: 268 },
                                        { text: "Try to slip away while they are distracted.", nextScene: 269 }
                                    ]);
                                    break;
                        
                                case 165:
                                    storyText.innerHTML = "As the gang members leave, you decide it’s time to regroup with your team and plan your next move.";
                                    createChoices([
                                        { text: "Head back to the warehouse to strategize.", nextScene: 270 },
                                        { text: "Contact Officer Green for an update.", nextScene: 271 }
                                    ]);
                                    break;
                        
                                case 166:
                                    storyText.innerHTML = "Back at the warehouse, you share what you overheard. Officer Green nods, impressed with your quick thinking.";
                                    createChoices([
                                        { text: "Plan a raid on the location you discovered.", nextScene: 272 },
                                        { text: "Prepare a decoy to lure the gang members out.", nextScene: 273 }
                                    ]);
                                    break;
                        
                                case 167:
                                    storyText.innerHTML = "As you strategize, a sudden noise interrupts your discussion. Someone has entered the warehouse!";
                                    createChoices([
                                        { text: "Investigate the noise cautiously.", nextScene: 274 },
                                        { text: "Ready your weapon and prepare for an ambush.", nextScene: 275 }
                                    ]);
                                    break;
                        
                                case 168:
                                    storyText.innerHTML = "You choose to investigate, moving quietly to avoid detection. You peek around the corner.";
                                    createChoices([
                                        { text: "Identify who it is before making a move.", nextScene: 276 },
                                        { text: "Confront them immediately, ready for anything.", nextScene: 277 }
                                    ]);
                                    break;
                                    case 169:
                                        storyText.innerHTML = "Peeking around the corner, you see it’s Claire entering the warehouse, looking anxious.";
                                        createChoices([
                                            { text: "Reassure her that everything is under control.", nextScene: 278 },
                                            { text: "Ask her if she has any updates on Victor.", nextScene: 279 }
                                        ]);
                                        break;
                            
                                    case 170:
                                        storyText.innerHTML = "Claire breathes a sigh of relief upon seeing you. 'I was worried! We need to find Victor before he gets hurt.'";
                                        createChoices([
                                            { text: "Propose a plan to find him together.", nextScene: 280 },
                                            { text: "Suggest splitting up to cover more ground.", nextScene: 281 }
                                        ]);
                                        break;
                            
                                    case 171:
                                        storyText.innerHTML = "You propose a plan. 'Let’s secure the exits and then search systematically. We can’t let him slip away again.'";
                                        createChoices([
                                            { text: "Start by checking the back exit.", nextScene: 282 },
                                            { text: "Check the front area first.", nextScene: 283 }
                                        ]);
                                        break;
                            
                                    case 172:
                                        storyText.innerHTML = "Claire nods in agreement. 'I’ll take the front. You cover the back. We’ll meet in the middle.'";
                                        createChoices([
                                            { text: "Head towards the back exit cautiously.", nextScene: 284 },
                                            { text: "Signal Officer Green to assist with the front.", nextScene: 285 }
                                        ]);
                                        break;
                            
                                    case 173:
                                        storyText.innerHTML = "As you approach the back exit, you hear voices. It sounds like Victor and someone else!";
                                        createChoices([
                                            { text: "Eavesdrop to gather information.", nextScene: 286 },
                                            { text: "Prepare to confront them immediately.", nextScene: 287 }
                                        ]);
                                        break;
                            
                                    case 174:
                                        storyText.innerHTML = "You choose to eavesdrop, pressing your ear against the door. Victor sounds distressed.";
                                        createChoices([
                                            { text: "Listen closely to what he is saying.", nextScene: 288 },
                                            { text: "Signal Claire to come over quietly.", nextScene: 289 }
                                        ]);
                                        break;
                            
                                    case 175:
                                        storyText.innerHTML = "You strain to hear, catching snippets about 'the deal' and 'no way back'. This could be crucial information.";
                                        createChoices([
                                            { text: "Take notes on what you hear.", nextScene: 290 },
                                            { text: "Prepare to intervene if things escalate.", nextScene: 291 }
                                        ]);
                                        break;
                            
                                    case 176:
                                        storyText.innerHTML = "Suddenly, the voices rise in anger. Victor sounds like he’s about to snap.";
                                        createChoices([
                                            { text: "Burst in and try to defuse the situation.", nextScene: 292 },
                                            { text: "Stay hidden and wait for an opening.", nextScene: 293 }
                                        ]);
                                        break;
                            
                                    case 177:
                                        storyText.innerHTML = "You decide to burst in. 'Victor! We need to talk!' you shout, hoping to break the tension.";
                                        createChoices([
                                            { text: "Try to reason with him quickly.", nextScene: 294 },
                                            { text: "Demand he puts the gun down.", nextScene: 295 }
                                        ]);
                                        break;
                            
                                    case 178:
                                        storyText.innerHTML = "Victor turns, shock on his face. 'What do you want? I can’t go back!'";
                                        createChoices([
                                            { text: "Remind him of the consequences of his actions.", nextScene: 296 },
                                            { text: "Offer him a way to turn things around.", nextScene: 297 }
                                        ]);
                                        break;
                            
                                    case 179:
                                        storyText.innerHTML = "You remind him that running will only make things worse. 'You have a choice, Victor. Make it count.'";
                                        createChoices([
                                            { text: "Encourage him to think of Claire.", nextScene: 298 },
                                            { text: "Reiterate the benefits of cooperation.", nextScene: 299 }
                                        ]);
                                        break;
                            
                                    case 180:
                                        storyText.innerHTML = "Victor’s expression softens. 'You don’t know what I’ve done…' he trails off, conflicted.";
                                        createChoices([
                                            { text: "Tell him everyone makes mistakes.", nextScene: 300 },
                                            { text: "Emphasize that he can still change his path.", nextScene: 301 }
                                        ]);
                                        break;
                            
                                    case 181:
                                        storyText.innerHTML = "Just then, you hear footsteps approaching. It’s the gang, looking for Victor!";
                                        createChoices([
                                            { text: "Prepare for a standoff.", nextScene: 302 },
                                            { text: "Try to sneak out with Victor.", nextScene: 303 }
                                        ]);
                                        break;
                            
                                    case 182:
                                        storyText.innerHTML = "You prepare for a standoff, positioning yourself protectively in front of Victor.";
                                        createChoices([
                                            { text: "Confront the gang members directly.", nextScene: 304 },
                                            { text: "Call for backup to come in quickly.", nextScene: 305 }
                                        ]);
                                        break;
                            
                                    case 183:
                                        storyText.innerHTML = "You choose to sneak out with Victor, hoping to avoid a confrontation. 'Follow my lead,' you whisper.";
                                        createChoices([
                                            { text: "Head towards the back door quietly.", nextScene: 306 },
                                            { text: "Find a different exit through the storage area.", nextScene: 307 }
                                        ]);
                                        break;
                            
                                    case 184:
                                        storyText.innerHTML = "As you attempt to sneak away, a gang member spots you! 'Hey, stop right there!' he shouts.";
                                        createChoices([
                                            { text: "Stand your ground and prepare to fight.", nextScene: 308 },
                                            { text: "Try to talk your way out of the situation.", nextScene: 309 }
                                        ]);
                                        break;
                            
                                    case 185:
                                        storyText.innerHTML = "You alert Officer Green, who quickly moves to intercept Victor. 'Don't let him get away!' he shouts.";
                                        createChoices([
                                            { text: "Stay back and let Officer Green handle it.", nextScene: 310 },
                                            { text: "Assist Officer Green in chasing after Victor.", nextScene: 311 }
                                        ]);
                                        break;
                                                    
                                        case 186:
    storyText.innerHTML = "You decide to assist Officer Green, sprinting after Victor together. You can see him turning a corner toward an alley.";
    createChoices([
        { text: "Follow him into the alley.", nextScene: 312 },
        { text: "Take a detour to try and cut him off.", nextScene: 313 }
    ]);
    break;

case 187:
    storyText.innerHTML = "Victor takes a sharp turn into the alleyway. You push yourself harder, closing the distance.";
    createChoices([
        { text: "Confront him directly in the alley.", nextScene: 314 },
        { text: "Call out for Victor to stop.", nextScene: 315 }
    ]);
    break;

case 188:
    storyText.innerHTML = "Victor glances back, and for a moment, you see hesitation in his eyes. He’s trapped in the alley with nowhere to go.";
    createChoices([
        { text: "Use the opportunity to talk him down.", nextScene: 316 },
        { text: "Rush forward to tackle him.", nextScene: 317 }
    ]);
    break;

case 189:
    storyText.innerHTML = "You rush forward, attempting to tackle Victor, but he dodges at the last moment, pulling out a weapon. 'Stay back!' he warns.";
    createChoices([
        { text: "Take cover and try to negotiate.", nextScene: 318 },
        { text: "Draw your own weapon and prepare for a standoff.", nextScene: 319 }
    ]);
    break;

case 190:
    storyText.innerHTML = "Victor’s breathing is heavy, his eyes darting around as he tries to think of a way out. The tension is rising.";
    createChoices([
        { text: "Offer him a deal: cooperate, and things will go easier.", nextScene: 320 },
        { text: "Warn him that he has no other choice.", nextScene: 321 }
    ]);
    break;

case 191:
    storyText.innerHTML = "Victor shakes his head. 'No deals! I can’t trust you!' His hand tightens on his weapon, but you can sense he’s losing his nerve.";
    createChoices([
        { text: "Appeal to his desperation and fear.", nextScene: 322 },
        { text: "Keep pressing for him to surrender.", nextScene: 323 }
    ]);
    break;

case 192:
    storyText.innerHTML = "You speak calmly, reminding Victor that there’s still a way out, that surrendering could save his life.";
    createChoices([
        { text: "Keep trying to talk him down.", nextScene: 324 },
        { text: "Use the moment to disarm him.", nextScene: 325 }
    ]);
    break;

case 193:
    storyText.innerHTML = "Just as you’re about to make another move, Officer Green arrives, his gun drawn. 'It’s over, Victor!' he shouts.";
    createChoices([
        { text: "Let Officer Green handle the situation.", nextScene: 326 },
        { text: "Try to de-escalate and convince Victor to drop his weapon.", nextScene: 327 }
    ]);
    break;

case 194:
    storyText.innerHTML = "Victor looks at both of you, panicking as the pressure builds. 'I didn’t want any of this!' he yells.";
    createChoices([
        { text: "Tell Victor it’s not too late to make things right.", nextScene: 328 },
        { text: "Wait for Victor to make the first move.", nextScene: 329 }
    ]);
    break;

case 195:
    storyText.innerHTML = "Victor’s face shows conflict. He glances at the weapon in his hand, then back at you. The tension in the alley is palpable.";
    createChoices([
        { text: "Take a step closer to him, lowering your own weapon.", nextScene: 330 },
        { text: "Stay back and wait to see what he does.", nextScene: 331 }
    ]);
    break;

case 196:
    storyText.innerHTML = "You slowly approach, trying to show Victor that you’re not a threat. 'Let’s talk about this,' you say.";
    createChoices([
        { text: "Continue approaching him carefully.", nextScene: 332 },
        { text: "Stop moving and let him decide what to do.", nextScene: 333 }
    ]);
    break;

case 197:
    storyText.innerHTML = "Officer Green stands ready, but he gives you the space to handle the situation. Victor seems torn between surrendering and fleeing.";
    createChoices([
        { text: "Encourage Victor to surrender peacefully.", nextScene: 334 },
        { text: "Warn him that any wrong move will end badly.", nextScene: 335 }
    ]);
    break;

case 198:
    storyText.innerHTML = "Victor lowers his weapon slightly, looking defeated. 'What do you want from me?' he asks, his voice cracking.";
    createChoices([
        { text: "Tell him to drop the weapon and come peacefully.", nextScene: 336 },
        { text: "Ask him to tell you everything he knows about the gang.", nextScene: 337 }
    ]);
    break;

case 199:
    storyText.innerHTML = "You sense that this could be your last chance to convince Victor to cooperate. He’s clearly struggling with his decision.";
    createChoices([
        { text: "Promise him protection if he gives up the gang’s secrets.", nextScene: 338 },
        { text: "Push him to surrender or face the consequences.", nextScene: 339 }
    ]);
    break;

case 200:
    storyText.innerHTML = "Victor finally lowers his weapon completely, his body slumping as if all the fight has gone out of him. 'Fine,' he mutters.";
    createChoices([
        { text: "Take him into custody.", nextScene: 340 },
        { text: "Ask him about the gang’s plans before arresting him.", nextScene: 341 }
    ]);
    break;

case 201:
    storyText.innerHTML = "Just as you begin to arrest Victor, a loud explosion echoes from the direction of the warehouse. Panic grips the air.";
    createChoices([
        { text: "Rush back to the warehouse to investigate.", nextScene: 342 },
        { text: "Call for backup while securing Victor.", nextScene: 343 }
    ]);
    break;

case 202:
    storyText.innerHTML = "The explosion causes chaos as smoke begins to billow from the warehouse. Gang members are trying to flee.";
    createChoices([
        { text: "Chase after the fleeing gang members.", nextScene: 344 },
        { text: "Secure Victor first before pursuing the gang.", nextScene: 345 }
    ]);
    break;

case 203:
    storyText.innerHTML = "Victor flinches at the explosion, but his eyes widen. 'They’re making their move!' he exclaims. 'You have to stop them!'";
    createChoices([
        { text: "Get more details from Victor about the gang’s plan.", nextScene: 346 },
        { text: "Hurry to the warehouse to stop the chaos.", nextScene: 347 }
    ]);
    break;

    case 204:
        storyText.innerHTML = "You decide to press Victor for more details. His eyes dart nervously between you and the warehouse. 'They’ve got explosives set all over,' he admits.";
        createChoices([
            { text: "Ask Victor how to disarm the explosives.", nextScene: 348 },
            { text: "Push Victor for more information about the gang’s leader.", nextScene: 349 }
        ]);
        break;
    
    case 205:
        storyText.innerHTML = "Victor hesitates before revealing more. 'The leader… he’s ruthless. He doesn’t care who gets hurt.' You can feel the urgency in his voice.";
        createChoices([
            { text: "Convince Victor to help you stop the leader.", nextScene: 350 },
            { text: "Thank Victor and rush towards the warehouse.", nextScene: 351 }
        ]);
        break;
    
    case 206:
        storyText.innerHTML = "As you begin moving toward the warehouse, you notice several gang members trying to escape through the back. If they get away, they could regroup.";
        createChoices([
            { text: "Cut them off before they escape.", nextScene: 352 },
            { text: "Let them go and focus on the explosives.", nextScene: 353 }
        ]);
        break;
    
    case 207:
        storyText.innerHTML = "You race toward the rear of the warehouse, where the gang members are slipping out through a side exit. They haven't seen you yet.";
        createChoices([
            { text: "Ambush them while they’re distracted.", nextScene: 354 },
            { text: "Follow them quietly to see where they’re headed.", nextScene: 355 }
        ]);
        break;
    
    case 208:
        storyText.innerHTML = "You catch up to the group and prepare to strike. But before you can, you notice one of them fiddling with a device—it looks like a detonator!";
        createChoices([
            { text: "Confront the gang member with the detonator.", nextScene: 356 },
            { text: "Try to disable the detonator from a distance.", nextScene: 357 }
        ]);
        break;
    
    case 209:
        storyText.innerHTML = "You shout out, drawing the attention of the gang members. The one holding the detonator glares at you, his thumb hovering over the button.";
        createChoices([
            { text: "Try to negotiate with the gang member.", nextScene: 358 },
            { text: "Rush forward and try to disarm him before he presses the button.", nextScene: 359 }
        ]);
        break;
    
    case 210:
        storyText.innerHTML = "The gang member hesitates for a moment, eyeing his companions for support. This might be your chance to gain the upper hand.";
        createChoices([
            { text: "Keep talking, trying to de-escalate.", nextScene: 360 },
            { text: "Take advantage of the moment and disarm him.", nextScene: 361 }
        ]);
        break;
    
    case 211:
        storyText.innerHTML = "Just as you’re about to make your next move, a loud noise from inside the warehouse causes everyone to pause. The detonator slips from the gang member’s hand.";
        createChoices([
            { text: "Quickly grab the detonator before anyone reacts.", nextScene: 362 },
            { text: "Focus on subduing the gang members while they’re distracted.", nextScene: 363 }
        ]);
        break;
    
    case 212:
        storyText.innerHTML = "You manage to grab the detonator, but the gang members aren’t giving up yet. One of them pulls out a weapon, and the situation escalates rapidly.";
        createChoices([
            { text: "Fight off the attackers and secure the detonator.", nextScene: 364 },
            { text: "Call for backup while holding off the gang members.", nextScene: 365 }
        ]);
        break;
    
    case 213:
        storyText.innerHTML = "With the detonator secured, you must now make a decision. The warehouse is still rigged with explosives, and time is running out.";
        createChoices([
            { text: "Head back to the warehouse to defuse the bombs.", nextScene: 366 },
            { text: "Pursue the remaining gang members to prevent future attacks.", nextScene: 367 }
        ]);
        break;
    
    case 214:
        storyText.innerHTML = "You rush back to the warehouse, where the air is thick with smoke. Inside, you can hear voices—there are still people trapped in there.";
        createChoices([
            { text: "Search for the explosives to disarm them.", nextScene: 368 },
            { text: "Help the trapped people escape before the building collapses.", nextScene: 369 }
        ]);
        break;
    
    case 215:
        storyText.innerHTML = "The situation is dire inside the warehouse. As you search for the bombs, you hear the faint ticking of one nearby.";
        createChoices([
            { text: "Attempt to disarm the bomb quickly.", nextScene: 370 },
            { text: "Search for all the explosives first before trying to disarm them.", nextScene: 371 }
        ]);
        break;
    
    case 216:
        storyText.innerHTML = "As you reach the bomb, you realize it’s more complicated than you expected. Disarming it will take skill and precision.";
        createChoices([
            { text: "Carefully attempt to defuse the bomb.", nextScene: 372 },
            { text: "Call for help from bomb disposal experts.", nextScene: 373 }
        ]);
        break;
    
    case 217:
        storyText.innerHTML = "You manage to stop the countdown, but there are more bombs scattered throughout the warehouse. The gang’s plan is far from over.";
        createChoices([
            { text: "Continue defusing the remaining bombs.", nextScene: 374 },
            { text: "Evacuate the building and prioritize saving lives.", nextScene: 375 }
        ]);
        break;
    
    case 218:
        storyText.innerHTML = "While evacuating the building, you notice a shadow moving in the distance. Someone is trying to escape the scene unnoticed.";
        createChoices([
            { text: "Pursue the shadowy figure.", nextScene: 376 },
            { text: "Focus on evacuating the remaining people.", nextScene: 377 }
        ]);
        break;
    
    case 219:
        storyText.innerHTML = "You chase after the shadowy figure, determined to catch them before they disappear. They dart through the smoke and debris.";
        createChoices([
            { text: "Increase your pace and try to cut them off.", nextScene: 378 },
            { text: "Stay back and observe where they’re going.", nextScene: 379 }
        ]);
        break;
    
    case 220:
        storyText.innerHTML = "The figure turns back for a moment, revealing a familiar face—it’s one of the high-ranking gang members!";
        createChoices([
            { text: "Confront them immediately.", nextScene: 380 },
            { text: "Follow them to see where they’re headed.", nextScene: 381 }
        ]);
        break;
    
    case 221:
        storyText.innerHTML = "You set a trap at the exit, positioning yourself behind some crates. The gang members rush past, unaware.";
        createChoices([
            { text: "Spring the trap and confront them.", nextScene: 382 },
            { text: "Follow them stealthily to gather information.", nextScene: 383 }
        ]);
        break;
    
        
        
        case 222:
            storyText.innerHTML = "As you spring the trap, the gang members are caught off guard. 'What the—?!' one shouts, and chaos erupts!";
            createChoices([
                { text: "Try to subdue the leader.", nextScene: 384 },
                { text: "Call for backup to surround them.", nextScene: 385 }
            ]);
            break;
        
        case 223:
            storyText.innerHTML = "You decide to follow them, using the shadows to your advantage. You overhear them planning their next move.";
            createChoices([
                { text: "Gather evidence and report back.", nextScene: 386 },
                { text: "Take the risk and confront them now.", nextScene: 387 }
            ]);
            break;
        
        case 224:
            storyText.innerHTML = "You tackle the leader, bringing him to the ground. 'You're done!' you declare, as the rest of the gang starts to flee.";
            createChoices([
                { text: "Call for Officer Green to help.", nextScene: 388 },
                { text: "Try to capture the remaining gang members alone.", nextScene: 389 }
            ]);
            break;
        
        case 225:
            storyText.innerHTML = "You radio for backup, and soon the area is surrounded. The gang members are outnumbered and have no choice but to surrender.";
            createChoices([
                { text: "Secure the scene and collect evidence.", nextScene: 390 },
                { text: "Question the leader about the robbery.", nextScene: 391 }
            ]);
            break;
        
        case 226:
            storyText.innerHTML = "You gather vital information about their next heist. Armed with this knowledge, you rush back to the precinct.";
            createChoices([
                { text: "Report the findings to the captain.", nextScene: 392 },
                { text: "Plan a covert operation with your team.", nextScene: 393 }
            ]);
            break;
        
        case 227:
            storyText.innerHTML = "With a deep breath, you step out of the shadows. 'You're not getting away this time!' you yell, drawing their attention.";
            createChoices([
                { text: "Engage in a fight with the gang.", nextScene: 394 },
                { text: "Try to negotiate with them.", nextScene: 395 }
            ]);
            break;
        
        case 228:
            storyText.innerHTML = "Officer Green arrives just in time. Together, you manage to secure the scene and apprehend the gang leader.";
            createChoices([
                { text: "Interrogate the leader for more information.", nextScene: 396 },
                { text: "Take him back to the station for processing.", nextScene: 397 }
            ]);
            break;
        
        case 229:
            storyText.innerHTML = "You charge after the fleeing gang members, determined to catch them. The adrenaline rushes through you.";
            createChoices([
                { text: "Split up to cover more ground.", nextScene: 398 },
                { text: "Call for backup while pursuing them.", nextScene: 399 }
            ]);
            break;
        
        case 230:
            storyText.innerHTML = "As you secure the scene, you find crucial evidence that links the gang to several previous robberies.";
            createChoices([
                { text: "Analyze the evidence with forensics.", nextScene: 400 },
                { text: "Present the evidence to your captain immediately.", nextScene: 401 }
            ]);
            break;
        
        case 231:
            storyText.innerHTML = "The gang leader smirks, 'You think you know everything? This is just the beginning.' He looks unbothered by the situation.";
            createChoices([
                { text: "Push him for answers.", nextScene: 402 },
                { text: "Threaten him to spill the truth.", nextScene: 403 }
            ]);
            break;
        
            case 232:
    storyText.innerHTML = "You press harder, demanding he tell you what’s really going on. His expression remains neutral, but you sense he’s hiding something.";
    createChoices([
        { text: "Keep pushing, he’ll break eventually.", nextScene: 404 },
        { text: "Switch tactics and try a softer approach.", nextScene: 405 }
    ]);
    break;
    
    case 233:
    storyText.innerHTML = "You step forward, voice cold, 'Spill the truth, or I’ll make sure you regret it.' His smirk fades slightly, but he still tries to maintain composure.";
    createChoices([
        { text: "Up the ante with a more severe threat.", nextScene: 406 },
        { text: "Suggest that maybe there's a way out for him.", nextScene: 407 }
    ]);
    break;

    case 234:
    storyText.innerHTML = "'You don’t want to mess with me,' you warn, your voice low and menacing. He finally cracks, a bead of sweat forming. 'Alright, alright... I’ll tell you what I know.'";
    createChoices([
        { text: "Demand the full story now.", nextScene: 408 },
        { text: "Get the names involved.", nextScene: 409 }
    ]);
    break;

    case 235:
    storyText.innerHTML = "You decide to soften your tone, 'Look, you don’t have to go down with this. Help me, and maybe I can help you.' He hesitates, clearly weighing his options.";
    createChoices([
        { text: "Offer him protection.", nextScene: 410 },
        { text: "Promise leniency if he cooperates.", nextScene: 411 }
    ]);
    break;
    case 236:
        storyText.innerHTML = "'You’ve got one last chance,' you growl. 'I won’t ask again.' His face goes pale, and he swallows hard. 'Okay, okay, I’ll talk,' he mutters.";
        createChoices([
            { text: "Press him for the details of the operation.", nextScene: 412 },
            { text: "Ask for the key names in his organization.", nextScene: 413 }
        ]);
        break;

        case 237:
    storyText.innerHTML = "You tilt your head, 'There might be a way out of this for you, but you’ll have to cooperate.' He looks intrigued, and you can see him considering the offer.";
    createChoices([
        { text: "Offer immunity in exchange for his full cooperation.", nextScene: 414 },
        { text: "Tell him you'll protect him if he gives up the key players.", nextScene: 415 }
    ]);
    break;

    case 238:
    storyText.innerHTML = "'Tell me everything,' you demand. The gang leader starts talking, revealing the deeper layers of the organization’s plan. 'It’s much bigger than you think,' he admits.";
    createChoices([
        { text: "Ask for the mastermind behind the operation.", nextScene: 416 },
        { text: "Focus on gathering details about the location of their base.", nextScene: 417 }
    ]);
    break;
    case 239:
        storyText.innerHTML = "'Who else is involved?' you ask, narrowing your eyes. He hesitates, then names a few key players. 'These are the ones you need to worry about,' he says, voice shaking.";
        createChoices([
            { text: "Demand more names.", nextScene: 418 },
            { text: "Press him for details about their roles.", nextScene: 419 }
        ]);
        break;

        case 240:
    storyText.innerHTML = "'We can protect you,' you offer. 'But you have to give me something in return.' He finally sighs, defeated. 'Alright, I’ll talk, but only if you guarantee my safety.'";
    createChoices([
        { text: "Assure him safety if he gives up his associates.", nextScene: 420 },
        { text: "Promise witness protection in exchange for full cooperation.", nextScene: 421 }
    ]);
    break;

    
    case 241:
        storyText.innerHTML = "'Help me out here, and I can make things easier for you,' you offer. He looks you in the eye, calculating his chances, then finally nods.";
        createChoices([
            { text: "Get the names of the people higher up.", nextScene: 422 },
            { text: "Ask about their future plans.", nextScene: 423 }
        ]);
        break;
        case 242:
            storyText.innerHTML = "You lean in closer, your voice steady. 'Tell me what you know, or this will not end well for you.' The leader’s expression changes, a flicker of fear crossing his face.";
            createChoices([
                { text: "Insist he gives you the names.", nextScene: 424 },
                { text: "Offer him a deal for immunity.", nextScene: 425 }
            ]);
            break;

            case 243: 
            storyText.innerHTML = "You draw your weapon, pointing it at him. 'You have one chance to talk before this goes south.' His bravado crumbles, and he starts to sweat.";
            createChoices([
                { text: "Demand the location of their hideout.", nextScene: 426 },
                { text: "Threaten to harm someone close to him.", nextScene: 427 }
            ]);
            break;
        
        case 244: 
            storyText.innerHTML = "With a resigned sigh, the gang leader starts rattling off names, his voice trembling. 'Fine! Just don’t hurt me!'";
            createChoices([
                { text: "Take the information and leave.", nextScene: 428 },
                { text: "Double-check his story with your contacts.", nextScene: 429 }
            ]);
            break;
        
        case 245: 
            storyText.innerHTML = "The leader eyes you suspiciously, weighing his options. 'Immunity... I might consider it, but what’s in it for me?'";
            createChoices([
                { text: "Promise him protection in exchange.", nextScene: 430 },
                { text: "State he has no other choice.", nextScene: 431 }
            ]);
            break;
        
        case 246: 
            storyText.innerHTML = "He gulps hard, fear palpable in the air. 'Okay, okay! I’ll tell you... but you need to promise me safety.'";
            createChoices([
                { text: "Agree to his terms.", nextScene: 432 },
                { text: "Refuse and tighten your grip.", nextScene: 433 }
            ]);
            break;
        
        case 247: 
            storyText.innerHTML = "His eyes widen in terror. 'No, please! Just tell me what you want!' He quickly starts spilling secrets.";
            createChoices([
                { text: "Listen carefully to his confession.", nextScene: 434 },
                { text: "Record his confession as evidence.", nextScene: 435 }
            ]);
            break;
        
        case 248: 
            storyText.innerHTML = "Armed with fresh intel, you leave the hideout, ready to take down the operation. Each step feels heavier, knowing the stakes.";
            createChoices([
                { text: "Plan a raid with your team.", nextScene: 436 },
                { text: "Inform your superior about the intel.", nextScene: 437 }
            ]);
            break;
        
        case 249: 
            storyText.innerHTML = "After a few calls, you verify his claims. He was telling the truth, and you have a solid lead.";
            createChoices([
                { text: "Set up a sting operation.", nextScene: 438 },
                { text: "Prepare for a confrontation.", nextScene: 439 }
            ]);
            break;
        
        case 250: 
            storyText.innerHTML = "He nods, and you can see he’s weighing his options. 'Alright, I’ll help you. Just make sure I’m safe.'";
            createChoices([
                { text: "Coordinate with your team for protection.", nextScene: 440 },
                { text: "Set a trap for the gang instead.", nextScene: 441 }
            ]);
            break;
        
        case 251: 
            storyText.innerHTML = "You stand firm, 'You have no choice. Spill the beans or face the consequences.' His facade shatters.";
            createChoices([
                { text: "Press him for more information.", nextScene: 442 },
                { text: "Leave him to reconsider his options.", nextScene: 443 }
            ]);
            break;
        
        case 252: 
            storyText.innerHTML = "You promise him safety, and he reveals the gang's next move. A heist is planned, and you need to stop it.";
            createChoices([
                { text: "Alert the police for a raid.", nextScene: 444 },
                { text: "Infiltrate the gang to gather more intel.", nextScene: 445 }
            ]);
            break;
        
        case 253: 
            storyText.innerHTML = "You tighten your grip, and the leader spills all he knows about the gang’s plans, desperate to save himself.";
            createChoices([
                { text: "Make sure to gather evidence.", nextScene: 446 },
                { text: "Leave him with a warning.", nextScene: 447 }
            ]);
            break;
        
        case 254: 
            storyText.innerHTML = "You listen intently as he divulges critical information about the gang’s operations, feeling a mix of excitement and dread.";
            createChoices([
                { text: "Decide on your next course of action.", nextScene: 448 },
                { text: "Report back to your superior immediately.", nextScene: 449 }
            ]);
            break;
        
        case 255: 
            storyText.innerHTML = "You record the confession, knowing it’ll be crucial for the case against the gang. With solid evidence, you can act.";
            createChoices([
                { text: "Prepare to present this evidence in court.", nextScene: 450 },
                { text: "Plan an immediate operation against the gang.", nextScene: 451 }
            ]);
            break;
        
        case 256: 
            storyText.innerHTML = "With your team assembled, you prepare for the raid. The adrenaline courses through your veins as you strategize.";
            createChoices([
                { text: "Choose to lead the raid personally.", nextScene: 452 },
                { text: "Delegate the operation to a trusted officer.", nextScene: 453 }
            ]);
            break;
        
        case 257: 
            storyText.innerHTML = "You inform your superior, and the department rallies for a swift operation. The atmosphere is tense but focused.";
            createChoices([
                { text: "Plan the operation details carefully.", nextScene: 454 },
                { text: "Rush the raid to catch them off guard.", nextScene: 455 }
            ]);
            break;
        
        case 258: 
            storyText.innerHTML = "Setting up the sting operation takes careful planning. You discuss strategies with your team to ensure success.";
            createChoices([
                { text: "Set a trap at the gang's known hangout.", nextScene: 456 },
                { text: "Lure them with false information.", nextScene: 457 }
            ]);
            break;
        
        case 259: 
            storyText.innerHTML = "You prepare for a confrontation, knowing that this might be the moment to bring down the entire operation.";
            createChoices([
                { text: "Confront them at their next job.", nextScene: 458 },
                { text: "Surveil their movements for more intel.", nextScene: 459 }
            ]);
            break;
        
        case 260: 
            storyText.innerHTML = "Coordinating with your team, you ensure the gang leader will be protected while you take action against the others.";
            createChoices([
                { text: "Wait for the perfect moment to strike.", nextScene: 460 },
                { text: "Ambush them immediately.", nextScene: 461 }
            ]);
            break;
        
            case 261: 
            storyText.innerHTML = "You decide to set a trap, knowing the gang will be back. It's risky but might be the only way to gather more evidence.";
            createChoices([
                { text: "Prepare the location for the trap.", nextScene: 462 },
                { text: "Notify your superiors about the plan.", nextScene: 463 }
            ]);
            break;
        
        case 262: 
            storyText.innerHTML = "Pressing him for more details, he starts to crumble, spilling secrets that could unravel the gang.";
            createChoices([
                { text: "Document everything he says.", nextScene: 464 },
                { text: "Focus on the main gang leader’s whereabouts.", nextScene: 465 }
            ]);
            break;
        
        case 263: 
            storyText.innerHTML = "You leave him with a warning, knowing it will linger in his mind, forcing him to reconsider his alliances.";
            createChoices([
                { text: "Monitor him for any changes in behavior.", nextScene: 466 },
                { text: "Wait for him to come to you with information.", nextScene: 467 }
            ]);
            break;
        
        case 268: 
            storyText.innerHTML = "Deciding on the next course of action, you feel a surge of responsibility. The lives of many depend on your choices.";
            createChoices([
                { text: "Gather your team for a briefing.", nextScene: 468 },
                { text: "Act alone to catch them off guard.", nextScene: 469 }
            ]);
            break;
        
        case 269: 
            storyText.innerHTML = "Reporting back, you outline the vital information you've gathered. The team begins strategizing immediately.";
            createChoices([
                { text: "Engage in a team meeting to finalize plans.", nextScene: 470 },
                { text: "Take initiative and head out alone.", nextScene: 471 }
            ]);
            break;
        
        case 270: 
            storyText.innerHTML = "Preparing to present the evidence in court, you understand the gravity of the situation. This could break the gang.";
            createChoices([
                { text: "Ensure all documentation is flawless.", nextScene: 472 },
                { text: "Consult with the prosecutor on strategy.", nextScene: 473 }
            ]);
            break;
        
        case 271: 
            storyText.innerHTML = "With the evidence in hand, you plan an operation to catch the gang red-handed. Timing is crucial.";
            createChoices([
                { text: "Launch the operation at dusk.", nextScene: 474 },
                { text: "Prepare for a night raid.", nextScene: 475 }
            ]);
            break;
        
        case 272: 
            storyText.innerHTML = "Leading the raid, you feel the weight of responsibility. Your team’s lives depend on your decisions.";
            createChoices([
                { text: "Stay in constant communication with your team.", nextScene: 476 },
                { text: "Take the lead and storm in without hesitation.", nextScene: 477 }
            ]);
            break;
        
        case 273: 
            storyText.innerHTML = "Delegating the operation, you trust your officer’s instincts while you oversee from a strategic vantage point.";
            createChoices([
                { text: "Provide support from a distance.", nextScene: 478 },
                { text: "Prepare to step in if things go wrong.", nextScene: 479 }
            ]);
            break;
        
        case 274: 
            storyText.innerHTML = "Planning the operation down to the smallest detail is critical. Every move counts in the game against the gang.";
            createChoices([
                { text: "Focus on escape routes for your team.", nextScene: 480 },
                { text: "Review the intel gathered before proceeding.", nextScene: 481 }
            ]);
            break;
        
        case 275: 
            storyText.innerHTML = "Rushing the raid, the element of surprise is on your side. But you must remain vigilant.";
            createChoices([
                { text: "Charge in with caution.", nextScene: 482 },
                { text: "Prepare for a quick getaway if needed.", nextScene: 483 }
            ]);
            break;
        
        case 276: 
            storyText.innerHTML = "Setting a trap at the gang's hangout requires precision and stealth. You coordinate with your team to lay the groundwork.";
            createChoices([
                { text: "Station snipers for backup.", nextScene: 484 },
                { text: "Ensure all exits are secured.", nextScene: 485 }
            ]);
            break;
        
        case 277: 
            storyText.innerHTML = "Luring the gang with false information is risky. You prepare to execute the plan with careful precision.";
            createChoices([
                { text: "Set up surveillance around the area.", nextScene: 486 },
                { text: "Have backup ready in case of trouble.", nextScene: 487 }
            ]);
            break;
        
        case 278: 
            storyText.innerHTML = "Confronting them at their next job feels exhilarating yet terrifying. Every instinct is on high alert.";
            createChoices([
                { text: "Take charge of the situation.", nextScene: 488 },
                { text: "Call for backup immediately.", nextScene: 489 }
            ]);
            break;
        
        case 279: 
            storyText.innerHTML = "Surveilling their movements for intel pays off. You observe their patterns and note down important details.";
            createChoices([
                { text: "Share findings with your team.", nextScene: 490 },
                { text: "Plan to infiltrate their next meeting.", nextScene: 491 }
            ]);
            break;
        
        case 280: 
            storyText.innerHTML = "Waiting for the perfect moment to strike takes patience. The tension is thick in the air as you bide your time.";
            createChoices([
                { text: "Stay alert for any signs of danger.", nextScene: 492 },
                { text: "Prepare for an all-out assault when the moment comes.", nextScene: 493 }
            ]);
            break;
        
        case 281: 
            storyText.innerHTML = "Ambushing them immediately might lead to chaos, but it’s a risk worth taking.";
            createChoices([
                { text: "Lead the charge.", nextScene: 494 },
                { text: "Hold back and let your team take the lead.", nextScene: 495 }
            ]);
            break;
        
        case 282: 
            storyText.innerHTML = "Preparing the location for the trap involves strategic placements and ensuring no slip-ups.";
            createChoices([
                { text: "Rehearse the operation with your team.", nextScene: 496 },
                { text: "Double-check all equipment and weapons.", nextScene: 497 }
            ]);
            break;
        
        case 283: 
            storyText.innerHTML = "Notifying your superiors about the plan is crucial. The higher-ups need to be in the loop for this to work.";
            createChoices([
                { text: "Request additional resources.", nextScene: 498 },
                { text: "Outline your strategy clearly.", nextScene: 499 }
            ]);
            break;
        
        case 284: 
            storyText.innerHTML = "Documenting everything is vital for the case. Every detail counts in court.";
            createChoices([
                { text: "Organize a meeting with your legal team.", nextScene: 500 },
                { text: "Prepare to present your findings to the higher-ups.", nextScene: 501 }
            ]);
            break;
        
        case 285: 
            storyText.innerHTML = "Focusing on the gang leader's whereabouts can lead to crucial developments in the investigation.";
            createChoices([
                { text: "Plan to follow up on this lead immediately.", nextScene: 502 },
                { text: "Share findings with the investigative team.", nextScene: 503 }
            ]);
            break;
        
        case 286: 
            storyText.innerHTML = "Monitoring him for changes could provide unexpected insights. The gang might be hiding something crucial.";
            createChoices([
                { text: "Set up a surveillance operation.", nextScene: 504 },
                { text: "Check in with your team regularly.", nextScene: 505 }
            ]);
            break;
        
        case 287: 
            storyText.innerHTML = "Waiting for him to come forward could be a gamble, but sometimes it’s worth the risk.";
            createChoices([
                { text: "Prepare to react quickly if he does.", nextScene: 506 },
                { text: "Keep a low profile until then.", nextScene: 507 }
            ]);
            break;
        
        case 288: 
            storyText.innerHTML = "Gathering your team for a briefing helps ensure everyone is on the same page. Clear communication is key.";
            createChoices([
                { text: "Assign specific roles for the operation.", nextScene: 508 },
                { text: "Encourage questions and strategizing.", nextScene: 509 }
            ]);
            break;
        
        case 289: 
            storyText.innerHTML = "Acting alone carries risks but could also lead to significant breakthroughs. Trusting your instincts is crucial.";
            createChoices([
                { text: "Stay under the radar as you investigate.", nextScene: 510 },
                { text: "Set up meetings with informants for intel.", nextScene: 511 }
            ]);
            break;
        
        case 290: 
            storyText.innerHTML = "Engaging in a team meeting ensures every detail is covered. This case is too important to overlook.";
            createChoices([
                { text: "Create a timeline for the operation.", nextScene: 512 },
                { text: "Discuss potential risks with your team.", nextScene: 513 }
            ]);
         break;        
         case 291: 
         storyText.innerHTML = "Taking the initiative might pay off. Your instincts tell you that time is of the essence.";
         createChoices([
             { text: "Proceed with caution.", nextScene: 514 },
             { text: "Look for allies who can help.", nextScene: 515 }
         ]);
         break;
     
     case 292: 
         storyText.innerHTML = "Ensuring all documentation is flawless is key for a successful prosecution. You want to nail the case.";
         createChoices([
             { text: "Review everything one last time.", nextScene: 516 },
             { text: "Prepare to present your evidence with confidence.", nextScene: 517 }
         ]);
         break;
     
     case 293: 
         storyText.innerHTML = "Consulting with the prosecutor ensures everyone is aligned on strategy. Clarity will lead to success.";
         createChoices([
             { text: "Discuss potential weaknesses in the case.", nextScene: 518 },
             { text: "Formulate an opening statement.", nextScene: 519 }
         ]);
         break;
     
     case 294: 
         storyText.innerHTML = "Launching the operation at dusk provides cover. Your team is ready to act swiftly and decisively.";
         createChoices([
             { text: "Lead the charge into the heart of the operation.", nextScene: 520 },
             { text: "Coordinate from a distance with your team.", nextScene: 521 }
         ]);
         break;
     
     case 295: 
         storyText.innerHTML = "Preparing for a night raid means stealth and strategy. Every detail counts in the dark.";
         createChoices([
             { text: "Use the element of surprise to your advantage.", nextScene: 522 },
             { text: "Ensure your team is equipped for the night.", nextScene: 523 }
         ]);
         break;
     
     case 296: 
         storyText.innerHTML = "Staying in constant communication with your team is crucial. Any slip-up could be catastrophic.";
         createChoices([
             { text: "Monitor all team members' positions closely.", nextScene: 524 },
             { text: "Prepare for quick adjustments based on their reports.", nextScene: 525 }
         ]);
         break;
     
     case 297: 
         storyText.innerHTML = "Taking the lead and storming in requires courage and precision. You have to set the tone for the operation.";
         createChoices([
             { text: "Yell commands to rally your team.", nextScene: 526 },
             { text: "Stay focused on your target and ignore distractions.", nextScene: 527 }
         ]);
         break;
     
     case 298: 
         storyText.innerHTML = "Providing support from a distance lets you oversee the operation without putting yourself in direct danger.";
         createChoices([
             { text: "Coordinate the team’s next moves.", nextScene: 528 },
             { text: "Be ready to step in if things escalate.", nextScene: 529 }
         ]);
         break;
     
     case 299: 
         storyText.innerHTML = "Preparing to step in if things go wrong keeps your mind sharp. You can’t let your guard down.";
         createChoices([
             { text: "Assess the situation carefully before acting.", nextScene: 530 },
             { text: "Communicate any signs of trouble to your team.", nextScene: 531 }
         ]);
         break;
     
     case 300: 
         storyText.innerHTML = "Focusing on escape routes for your team is smart. You need to plan for every possible outcome.";
         createChoices([
             { text: "Identify all potential exits.", nextScene: 532 },
             { text: "Run drills with your team for quick exits.", nextScene: 533 }
         ]);
         break;
     
     case 301: 
         storyText.innerHTML = "Reviewing the intel gathered helps ensure no stone is left unturned. Every detail matters.";
         createChoices([
             { text: "Compile a final report for the team.", nextScene: 534 },
             { text: "Share your findings in the briefing.", nextScene: 535 }
         ]);
         break;
     
     case 302: 
         storyText.innerHTML = "Charging in with caution balances bravery with wisdom. You have to be calculated.";
         createChoices([
             { text: "Focus on your surroundings for any surprises.", nextScene: 536 },
             { text: "Trust your instincts and move forward.", nextScene: 537 }
         ]);
         break;
     
     case 303: 
         storyText.innerHTML = "Preparing for a quick getaway if needed ensures you’re ready for anything. The unexpected can always happen.";
         createChoices([
             { text: "Scout for potential escape routes.", nextScene: 538 },
             { text: "Keep your vehicle ready for a swift exit.", nextScene: 539 }
         ]);
         break;
     
     case 304: 
         storyText.innerHTML = "Stationing snipers for backup creates an extra layer of safety for the operation. Every angle needs to be covered.";
         createChoices([
             { text: "Check in with the snipers for readiness.", nextScene: 540 },
             { text: "Prepare for communication during the operation.", nextScene: 541 }
         ]);
         break;
     
     case 305: 
         storyText.innerHTML = "Ensuring all exits are secured minimizes the chances of the gang escaping. You can’t afford to let them slip away.";
         createChoices([
             { text: "Coordinate with your team on exit plans.", nextScene: 542 },
             { text: "Set up traps to catch any escapees.", nextScene: 543 }
         ]);
         break;
     
     case 306: 
         storyText.innerHTML = "Setting up surveillance around the area provides critical intel for your operation. You’ll know what to expect.";
         createChoices([
             { text: "Review footage regularly for updates.", nextScene: 544 },
             { text: "Prepare to deploy your team based on observations.", nextScene: 545 }
         ]);
         break;
     
     case 307: 
         storyText.innerHTML = "Having backup ready is always a smart move. You need all hands on deck for this operation.";
         createChoices([
             { text: "Establish a signal for backup.", nextScene: 546 },
             { text: "Prepare your backup team for swift action.", nextScene: 547 }
         ]);
         break;
     
     case 308: 
         storyText.innerHTML = "Taking charge in the confrontation is daunting. The weight of the moment hangs heavily in the air.";
         createChoices([
             { text: "Shout for their attention and assert control.", nextScene: 548 },
             { text: "Wait for them to make the first move.", nextScene: 549 }
         ]);
         break;
     
     case 309: 
         storyText.innerHTML = "Calling for backup immediately signals to your team that things are escalating quickly. You need every advantage.";
         createChoices([
             { text: "Prepare to fight if needed.", nextScene: 550 },
             { text: "Stay behind cover until backup arrives.", nextScene: 551 }
         ]);
         break;
     
     case 310: 
         storyText.innerHTML = "Sharing findings with your team helps unify the effort. Everyone must be informed for the best chance of success.";
         createChoices([
             { text: "Discuss the implications of the intel.", nextScene: 552 },
             { text: "Plan how to act on the information.", nextScene: 553 }
         ]);
         break;
     
     case 311: 
         storyText.innerHTML = "Planning to infiltrate their next meeting requires stealth and precision. You need to blend in.";
         createChoices([
             { text: "Gather disguises and props.", nextScene: 554 },
             { text: "Coordinate with a contact inside the gang.", nextScene: 555 }
         ]);
         break;
     
     case 312: 
         storyText.innerHTML = "Staying alert for any signs of danger is crucial. You can’t let your guard down, no matter what.";
         createChoices([
             { text: "Scan the area for suspicious behavior.", nextScene: 556 },
             { text: "Prepare your team for a quick response.", nextScene: 557 }
         ]);
         break;
     
     case 313: 
         storyText.innerHTML = "Preparing for an all-out assault means gearing up for action. The stakes are incredibly high.";
         createChoices([
             { text: "Lead your team into battle.", nextScene: 558 },
             { text: "Set up defensive positions first.", nextScene: 559 }
         ]);
         break;
     
     case 314: 
         storyText.innerHTML = "Leading the charge feels empowering. You’re taking control of the situation.";
         createChoices([
             { text: "Yell commands to keep your team focused.", nextScene: 560 },
             { text: "Dive into the fray with determination.", nextScene: 561 }
         ]);
         break;
     
     case 315: 
         storyText.innerHTML = "Holding back while your team takes the lead allows you to assess the situation from a strategic standpoint.";
         createChoices([
             { text: "Look for openings to join the fight.", nextScene: 562 },
             { text: "Monitor your team's movements closely.", nextScene: 563 }
         ]);
         break;
     
     case 316: 
         storyText.innerHTML = "Rehearsing the operation with your team builds confidence. Everyone needs to be prepared for what’s to come.";
         createChoices([
             { text: "Identify potential problems in the plan.", nextScene: 564 },
             { text: "Encourage team members to ask questions.", nextScene: 565 }
         ]);
         break;
     
case 317: 
    storyText.innerHTML = "Double-checking all equipment ensures that everything is ready. No mistakes allowed.";
    createChoices([
        { text: "Test all weapons and communication devices.", nextScene: 566 },
        { text: "Prepare a contingency plan for failures.", nextScene: 567 }
    ]);
    break;

case 318: 
    storyText.innerHTML = "Requesting additional resources can provide the edge you need. The more support, the better.";
    createChoices([
        { text: "Outline exactly what you need.", nextScene: 568 },
        { text: "Prepare to justify your request.", nextScene: 569 }
    ]);
    break;

case 319: 
    storyText.innerHTML = "Outlining your strategy clearly ensures everyone is on the same page. Clarity is key in this line of work.";
    createChoices([
        { text: "Encourage input from team members.", nextScene: 570 },
        { text: "Finalize the plan with a review session.", nextScene: 571 }
    ]);
    break;

case 320: 
    storyText.innerHTML = "Organizing a meeting with your legal team is essential for the next steps. You need to strategize.";
    createChoices([
        { text: "Present your findings in detail.", nextScene: 572 },
        { text: "Discuss potential legal challenges.", nextScene: 573 }
    ]);
    break;

case 321: 
    storyText.innerHTML = "Preparing to present your findings helps ensure a successful prosecution. Confidence is crucial.";
    createChoices([
        { text: "Practice your presentation multiple times.", nextScene: 574 },
        { text: "Rehearse possible questions from the jury.", nextScene: 575 }
    ]);
    break;

    case 322:
        storyText.innerHTML = "Gathering your evidence meticulously is vital. Each piece could be the key to your case.";
        createChoices([
            { text: "Double-check the authenticity of each document.", nextScene: 576 },
            { text: "Organize the evidence in a logical order.", nextScene: 577 }
        ]);
        break;
    
    case 323:
        storyText.innerHTML = "Your intuition tells you to prepare for unexpected challenges. Anticipating obstacles is essential.";
        createChoices([
            { text: "Create a list of potential issues and solutions.", nextScene: 578 },
            { text: "Discuss with your team how to handle surprises.", nextScene: 579 }
        ]);
        break;
    
    case 324:
        storyText.innerHTML = "The night before the trial is restless. You know a good night’s sleep is crucial for clarity.";
        createChoices([
            { text: "Review your notes one last time.", nextScene: 580 },
            { text: "Try to relax and get some rest.", nextScene: 581 }
        ]);
        break;
    
    case 325:
        storyText.innerHTML = "On the day of the trial, you arrive early to settle in. First impressions matter.";
        createChoices([
            { text: "Set up your materials in an organized manner.", nextScene: 582 },
            { text: "Take a moment to breathe and collect your thoughts.", nextScene: 583 }
        ]);
        break;
    
    case 326:
        storyText.innerHTML = "As the trial begins, the atmosphere is tense. You can feel the weight of everyone’s expectations.";
        createChoices([
            { text: "Make eye contact with the jury to engage them.", nextScene: 584 },
            { text: "Start with a strong opening statement.", nextScene: 585 }
        ]);
        break;
    
    case 327:
        storyText.innerHTML = "Presenting your evidence clearly can sway the jury. You need to make each point count.";
        createChoices([
            { text: "Use visual aids to enhance your presentation.", nextScene: 586 },
            { text: "Tell a compelling story with your evidence.", nextScene: 587 }
        ]);
        break;
    
    case 328:
        storyText.innerHTML = "As you present, you notice some jurors nodding along. It feels like they are on your side.";
        createChoices([
            { text: "Continue building your argument confidently.", nextScene: 588 },
            { text: "Address any confusion they may have immediately.", nextScene: 589 }
        ]);
        break;
    
    case 329:
        storyText.innerHTML = "The defense attorney rises to question your evidence. You need to stay composed.";
        createChoices([
            { text: "Listen carefully to their arguments.", nextScene: 590 },
            { text: "Prepare to defend your points vigorously.", nextScene: 591 }
        ]);
        break;
    
    case 330:
        storyText.innerHTML = "Facing tough questions is part of the trial process. You’ve prepared for this.";
        createChoices([
            { text: "Take a moment to think before responding.", nextScene: 592 },
            { text: "Refer back to your evidence to strengthen your answer.", nextScene: 593 }
        ]);
        break;
    
    case 331:
        storyText.innerHTML = "The jury seems engaged but skeptical. You need to convince them of your perspective.";
        createChoices([
            { text: "Use emotional appeals to connect with them.", nextScene: 594 },
            { text: "Stick to the facts and logical reasoning.", nextScene: 595 }
        ]);
        break;
    
    case 332:
        storyText.innerHTML = "After a challenging cross-examination, you feel the tension in the room rise.";
        createChoices([
            { text: "Maintain your composure and confidence.", nextScene: 596 },
            { text: "Request a brief recess to regroup.", nextScene: 597 }
        ]);
        break;
    
    case 333:
        storyText.innerHTML = "During the recess, you discuss strategies with your team. Communication is key.";
        createChoices([
            { text: "Review what worked and what didn’t during the presentation.", nextScene: 598 },
            { text: "Encourage your team to stay positive and focused.", nextScene: 599 }
        ]);
        break;
    
    case 334:
        storyText.innerHTML = "As the trial resumes, you feel reinvigorated. You’re ready to make your final push.";
        createChoices([
            { text: "Summarize your main arguments powerfully.", nextScene: 600 },
            { text: "Invite the jury to consider the broader implications of the case.", nextScene: 601 }
        ]);
        break;
    
    case 335:
        storyText.innerHTML = "Your final remarks are crucial in leaving a lasting impression on the jury.";
        createChoices([
            { text: "End with a strong, memorable statement.", nextScene: 602 },
            { text: "Thank the jury for their attention and consideration.", nextScene: 603 }
        ]);
        break;
    
    case 336:
        storyText.innerHTML = "As you wait for the jury's verdict, anticipation hangs in the air. Your heart races.";
        createChoices([
            { text: "Reflect on the trial and your performance.", nextScene: 604 },
            { text: "Discuss next steps with your team.", nextScene: 605 }
        ]);
        break;
    
    case 337:
        storyText.innerHTML = "The jury returns with their decision. You can feel the weight of the moment.";
        createChoices([
            { text: "Prepare for the announcement with bated breath.", nextScene: 606 },
            { text: "Remind your team to stay calm, regardless of the outcome.", nextScene: 607 }
        ]);
        break;
    
    case 338:
        storyText.innerHTML = "After multiple practices, you feel ready. On the day of the trial, you present your findings clearly and confidently.";
        createChoices([
            { text: "The jury is convinced.", nextScene: 608 },
            { text: "You face tough questions but handle them well.", nextScene: 609}
        ]);
        break;

        case 339:
    storyText.innerHTML = "With bated breath, you listen as the jury deliberates. The tension in the courtroom is palpable.";
    createChoices([
        { text: "Stay focused on the evidence you've presented.", nextScene: 610 },
        { text: "Engage in quiet conversation with your team.", nextScene: 611 }
    ]);
    break;

case 340:
    storyText.innerHTML = "The jury returns, and you can see the seriousness on their faces. You brace yourself for the verdict.";
    createChoices([
        { text: "Maintain a calm demeanor as they announce their decision.", nextScene: 612 },
        { text: "Prepare yourself mentally for any outcome.", nextScene: 613 }
    ]);
    break;

case 341:
    storyText.innerHTML = "As the foreperson stands to read the verdict, you hold your breath. This moment is crucial.";
    createChoices([
        { text: "Listen intently to every word.", nextScene: 614 },
        { text: "Watch the reactions of the jury members closely.", nextScene: 615 }
    ]);
    break;

case 342:
    storyText.innerHTML = "The verdict is read: 'Guilty.' Relief washes over you, but you know there’s more work to be done.";
    createChoices([
        { text: "Thank your team for their support and hard work.", nextScene: 616 },
        { text: "Reflect on what led to this success.", nextScene: 617 }
    ]);
    break;

case 343:
    storyText.innerHTML = "As you celebrate the victory, thoughts of the next steps for sentencing begin to emerge.";
    createChoices([
        { text: "Prepare a statement for the press about the case.", nextScene: 618 },
        { text: "Meet with your team to discuss sentencing strategies.", nextScene: 619 }
    ]);
    break;

case 344:
    storyText.innerHTML = "In your meeting, you review the evidence that led to a successful conviction. Every detail mattered.";
    createChoices([
        { text: "Discuss any weak points that could be improved for future cases.", nextScene: 620 },
        { text: "Celebrate the successes you've achieved as a team.", nextScene: 621 }
    ]);
    break;

case 345:
    storyText.innerHTML = "As you prepare for the sentencing phase, you know that it’s crucial to convey the impact of the crime.";
    createChoices([
        { text: "Draft a victim impact statement to present.", nextScene: 622 },
        { text: "Research precedents for similar cases.", nextScene: 623 }
    ]);
    break;

case 346:
    storyText.innerHTML = "The day of sentencing arrives. You’re determined to ensure justice is served.";
    createChoices([
        { text: "Present the victim's statement with conviction.", nextScene: 624 },
        { text: "Highlight the crime’s impact on the community.", nextScene: 625 }
    ]);
    break;

case 347:
    storyText.innerHTML = "As you present your arguments for sentencing, you notice the judge's attentiveness.";
    createChoices([
        { text: "Maintain eye contact to emphasize your points.", nextScene: 626 },
        { text: "Use statistics to support your argument.", nextScene: 627 }
    ]);
    break;

case 348:
    storyText.innerHTML = "The defense attorney attempts to counter your statements. You stay focused and ready to respond.";
    createChoices([
        { text: "Prepare to refute their arguments with facts.", nextScene: 628 },
        { text: "Stay calm and composed under pressure.", nextScene: 629 }
    ]);
    break;

case 349:
    storyText.innerHTML = "The judge asks questions for clarification. This is an opportunity to strengthen your case.";
    createChoices([
        { text: "Answer clearly and confidently.", nextScene: 630 },
        { text: "Use this moment to highlight key evidence.", nextScene: 631 }
    ]);
    break;

case 350:
    storyText.innerHTML = "After the arguments are made, you await the judge's decision. The atmosphere is tense once again.";
    createChoices([
        { text: "Reflect on your performance during the trial.", nextScene: 632 },
        { text: "Talk to your team about their thoughts.", nextScene: 633 }
    ]);
    break;

case 351:
    storyText.innerHTML = "The judge finally delivers the sentence. You feel a mix of relief and satisfaction.";
    createChoices([
        { text: "Thank everyone for their support.", nextScene: 634 },
        { text: "Consider what this case means for your career.", nextScene: 635 }
    ]);
    break;

case 352:
    storyText.innerHTML = "With the trial behind you, you start to plan for your next case. There’s always more work to do.";
    createChoices([
        { text: "Review what went well in this case.", nextScene: 636 },
        { text: "Think about areas where you can improve.", nextScene: 637 }
    ]);
    break;

case 353:
    storyText.innerHTML = "After a successful outcome, you reflect on the journey of this case. Each step was critical.";
    createChoices([
        { text: "Document your learnings for future reference.", nextScene: 638 },
        { text: "Discuss with your mentors for further insights.", nextScene: 639 }
    ]);
    break;

case 354:
    storyText.innerHTML = "You’ve built a solid foundation for your future cases. Your confidence grows with each success.";
    createChoices([
        { text: "Prepare to take on more challenging cases.", nextScene: 640 },
        { text: "Continue strengthening your team’s skills.", nextScene: 641 }
    ]);
    break;

case 355:
    storyText.innerHTML = "As you close this chapter, you look forward to the challenges and victories that lie ahead.";
    createChoices([
        { text: "Set new goals for your career.", nextScene: 642 },
        { text: "Celebrate this victory with your team.", nextScene: 643 }
    ]);
    break;

    case 356:
        storyText.innerHTML = "Reflecting on your journey, you realize that each case has contributed to your growth as a prosecutor.";
        createChoices([
            { text: "Write down your thoughts in a journal.", nextScene: 644 },
            { text: "Discuss your experiences with a mentor.", nextScene: 645 }
        ]);
        break;
    
    case 357:
        storyText.innerHTML = "You decide to share your insights with your team to motivate and inspire them.";
        createChoices([
            { text: "Host a team meeting to share your reflections.", nextScene: 646 },
            { text: "Send an email highlighting key takeaways.", nextScene: 647 }
        ]);
        break;
    
    case 358:
        storyText.innerHTML = "Your team responds positively to your encouragement, and morale is high.";
        createChoices([
            { text: "Plan a team-building activity to strengthen bonds.", nextScene: 648 },
            { text: "Encourage each member to pursue their own development.", nextScene: 649 }
        ]);
        break;
    
    case 359:
        storyText.innerHTML = "You begin considering what type of cases you want to pursue next.";
        createChoices([
            { text: "Research upcoming cases that need attention.", nextScene: 650 },
            { text: "Talk to your supervisor about your ambitions.", nextScene: 651 }
        ]);
        break;
    
    case 360:
        storyText.innerHTML = "After discussions, you feel excited about the opportunities ahead. Your passion for justice remains strong.";
        createChoices([
            { text: "Revisit your past cases to find areas for improvement.", nextScene: 652 },
            { text: "Start preparing for a new case you’re interested in.", nextScene: 653 }
        ]);
        break;
    
    case 361:
        storyText.innerHTML = "You gather your materials and begin to strategize for your next courtroom battle.";
        createChoices([
            { text: "Create a detailed plan for your approach.", nextScene: 654 },
            { text: "Collaborate with colleagues for fresh perspectives.", nextScene: 655 }
        ]);
        break;
    
    case 362:
        storyText.innerHTML = "Feeling invigorated, you dive into your research, leaving no stone unturned.";
        createChoices([
            { text: "Compile all necessary evidence and testimonies.", nextScene: 656 },
            { text: "Prepare a timeline of events related to the case.", nextScene: 657 }
        ]);
        break;
    
    case 363:
        storyText.innerHTML = "As you gather information, you find new leads that could strengthen your argument.";
        createChoices([
            { text: "Reach out to potential witnesses for their input.", nextScene: 658 },
            { text: "Analyze previous similar cases for insights.", nextScene: 659 }
        ]);
        break;
    
    case 364:
        storyText.innerHTML = "Your excitement grows as you feel more prepared for the challenges ahead.";
        createChoices([
            { text: "Schedule a mock trial to practice your presentation.", nextScene: 660 },
            { text: "Enlist the help of a legal expert to refine your approach.", nextScene: 661 }
        ]);
        break;
    
    case 365:
        storyText.innerHTML = "On the day of the mock trial, you receive valuable feedback from your peers.";
        createChoices([
            { text: "Make adjustments based on their suggestions.", nextScene: 662 },
            { text: "Conduct additional practice sessions to build confidence.", nextScene: 663 }
        ]);
        break;
    
    case 366:
        storyText.innerHTML = "You feel well-prepared and confident as the actual trial day approaches.";
        createChoices([
            { text: "Double-check your materials one last time.", nextScene: 664 },
            { text: "Visualize a successful presentation in your mind.", nextScene: 665 }
        ]);
        break;
    
    case 367:
        storyText.innerHTML = "The night before the trial, you review your notes and get a good night's sleep.";
        createChoices([
            { text: "Set your alarm to ensure you arrive early.", nextScene: 666 },
            { text: "Prepare a positive affirmation to boost your confidence.", nextScene: 667 }
        ]);
        break;
    
    case 368:
        storyText.innerHTML = "The morning of the trial, you feel a mix of nerves and excitement.";
        createChoices([
            { text: "Eat a healthy breakfast to fuel your day.", nextScene: 668 },
            { text: "Go for a short walk to clear your mind.", nextScene: 669 }
        ]);
        break;
    
    case 369:
        storyText.innerHTML = "Arriving at the courthouse, you take a moment to breathe and center yourself.";
        createChoices([
            { text: "Review your notes in the waiting area.", nextScene: 670 },
            { text: "Visualize the courtroom environment and your role in it.", nextScene: 671 }
        ]);
        break;
    
    case 370:
        storyText.innerHTML = "You step into the courtroom, ready to make your case and secure justice.";
        createChoices([
            { text: "Present your findings with clarity and passion.", nextScene: 672 },
            { text: "Engage with the jury to establish rapport.", nextScene: 673 }
        ]);
        break;
    
    case 371:
        storyText.innerHTML = "As the trial unfolds, you adapt to the jury’s reactions and the defense’s tactics.";
        createChoices([
            { text: "Stay flexible and adjust your strategy as needed.", nextScene: 674 },
            { text: "Focus on reinforcing your key arguments.", nextScene: 675 }
        ]);
        break;
    
    case 372:
        storyText.innerHTML = "After multiple practices, you feel ready. On the day of the trial, you present your findings clearly and confidently.";
        createChoices([
            { text: "The jury is convinced.", nextScene: 676 },
            { text: "You face tough questions but handle them well.", nextScene: 677 }
        ]);
        break;
    
        case 373:
            storyText.innerHTML = "As you prepare for the trial, you remind yourself of the importance of the evidence you gathered.";
            createChoices([
                { text: "Review key pieces of evidence one last time.", nextScene: 678 },
                { text: "Create a compelling narrative to present.", nextScene: 679 }
            ]);
            break;
        
        case 374:
            storyText.innerHTML = "You take a moment to visualize the courtroom and your strategy.";
            createChoices([
                { text: "Practice your opening statement aloud.", nextScene: 680 },
                { text: "Mentally prepare for possible objections from the defense.", nextScene: 681 }
            ]);
            break;
        
        case 375:
            storyText.innerHTML = "Arriving at the courthouse, you feel the weight of the case on your shoulders.";
            createChoices([
                { text: "Meet with your team to discuss final details.", nextScene: 682 },
                { text: "Take a few moments to gather your thoughts alone.", nextScene: 683 }
            ]);
            break;
        
        case 376:
            storyText.innerHTML = "Your team expresses confidence in your abilities, boosting your morale.";
            createChoices([
                { text: "Thank them for their support and encouragement.", nextScene: 684 },
                { text: "Remind everyone of the importance of their roles.", nextScene: 685 }
            ]);
            break;
        
        case 377:
            storyText.innerHTML = "As the trial begins, you feel a surge of adrenaline.";
            createChoices([
                { text: "Focus on the judge and jury as you present your opening statement.", nextScene: 686 },
                { text: "Stay calm and maintain your composure throughout the proceedings.", nextScene: 687 }
            ]);
            break;
        
        case 378:
            storyText.innerHTML = "During the trial, you listen carefully to the defense's arguments.";
            createChoices([
                { text: "Take notes on their strategy to prepare for rebuttal.", nextScene: 688 },
                { text: "Identify gaps in their argument to exploit later.", nextScene: 689 }
            ]);
            break;
        
        case 379:
            storyText.innerHTML = "You strategically counter the defense's claims with solid evidence.";
            createChoices([
                { text: "Cite precedents to strengthen your position.", nextScene: 690 },
                { text: "Appeal to the jury's emotions to reinforce your case.", nextScene: 691 }
            ]);
            break;
        
        case 380:
            storyText.innerHTML = "As the trial progresses, the jury's expressions give you clues about their thoughts.";
            createChoices([
                { text: "Adjust your presentation based on their reactions.", nextScene: 692 },
                { text: "Maintain your focus on delivering a strong closing argument.", nextScene: 693 }
            ]);
            break;
        
        case 381:
            storyText.innerHTML = "The pressure mounts as you approach the closing arguments.";
            createChoices([
                { text: "Craft a powerful summary of your key points.", nextScene: 694 },
                { text: "Emphasize the consequences of the jury's decision.", nextScene: 695 }
            ]);
            break;
        
        case 382:
            storyText.innerHTML = "After delivering your closing statement, you feel a mix of relief and anticipation.";
            createChoices([
                { text: "Reflect on the trial and how you can improve for next time.", nextScene: 696 },
                { text: "Wait anxiously for the jury's deliberation to conclude.", nextScene: 697 }
            ]);
            break;
        
        case 383:
            storyText.innerHTML = "As the jury returns, you take a deep breath, preparing for their verdict.";
            createChoices([
                { text: "Hope for the best while being ready for any outcome.", nextScene: 698 },
                { text: "Prepare to address the jury's questions if needed.", nextScene: 699 }
            ]);
            break;
        
            case 384:
                storyText.innerHTML = "The jury announces their decision, and you hold your breath in anticipation.";
                createChoices([
                    { text: "The jury is convinced.", nextScene: 700 },
                    { text: "You face tough questions but handle them well.", nextScene: 701 }
                ]);
                break;
            
            case 385:
                storyText.innerHTML = "After the jury's announcement, you reflect on the key moments of the trial.";
                createChoices([
                    { text: "Review your opening and closing statements.", nextScene: 702 },
                    { text: "Discuss with your team what went well and what didn’t.", nextScene: 703 }
                ]);
                break;
            
            case 386:
                storyText.innerHTML = "The verdict is delivered, and you feel a rush of emotions as you wait to hear the outcome.";
                createChoices([
                    { text: "Hope for a favorable verdict.", nextScene: 704 },
                    { text: "Prepare for any possible outcomes.", nextScene: 705 }
                ]);
                break;
            
            case 387:
                storyText.innerHTML = "The jury foreperson stands to deliver the verdict, and you lean in to hear every word.";
                createChoices([
                    { text: "Listen intently, hoping for justice.", nextScene: 706 },
                    { text: "Brace yourself for potential disappointment.", nextScene: 707 }
                ]);
                break;
            
            case 388:
                storyText.innerHTML = "The foreperson reads, 'We find the defendant... guilty.' You feel a wave of relief wash over you.";
                createChoices([
                    { text: "Celebrate with your team for a job well done.", nextScene: 708 },
                    { text: "Reflect on the journey and the impact of the verdict.", nextScene: 709 }
                ]);
                break;
            
            case 389:
                storyText.innerHTML = "In the aftermath of the trial, you gather your thoughts and prepare for the next steps.";
                createChoices([
                    { text: "Discuss potential appeals with your team.", nextScene: 710 },
                    { text: "Plan a meeting to discuss the case's broader implications.", nextScene: 711 }
                ]);
                break;
            
            case 390:
                storyText.innerHTML = "You take a moment to thank your team for their hard work and dedication throughout the trial.";
                createChoices([
                    { text: "Express your gratitude during a team gathering.", nextScene: 712 },
                    { text: "Write a heartfelt note to each member.", nextScene: 713 }
                ]);
                break;
            
            case 391:
                storyText.innerHTML = "Reflecting on the trial, you consider how to improve for future cases.";
                createChoices([
                    { text: "Schedule a debriefing session to review the trial.", nextScene: 714 },
                    { text: "Research new strategies and tactics.", nextScene: 715 }
                ]);
                break;
            
            case 392:
                storyText.innerHTML = "As you wrap up the day, you can't help but feel a sense of accomplishment.";
                createChoices([
                    { text: "Celebrate the victory with your team.", nextScene: 716 },
                    { text: "Take a moment to relax and recharge.", nextScene: 717 }
                ]);
                break;
            
            case 393:
                storyText.innerHTML = "The journey is far from over; each case brings new challenges and opportunities.";
                createChoices([
                    { text: "Prepare for the next case that lies ahead.", nextScene: 718 },
                    { text: "Reflect on the lessons learned during this trial.", nextScene: 719 }
                ]);
                break;
            
            case 394:
                storyText.innerHTML = "After multiple practices, you feel ready. On the day of the trial, you present your findings clearly and confidently.";
                createChoices([
                    { text: "The jury is convinced.", nextScene: 720 },
                    { text: "You face tough questions but handle them well.", nextScene: 721 }
                ]);
                break;
        

case 395:
    storyText.innerHTML = "You rehearse possible questions, which prepares you for the unexpected during the trial.";
    createChoices([
        { text: "The jury seems engaged with your answers.", nextScene: 722 },
        { text: "You manage to win over the toughest juror.", nextScene: 723 }
    ]);
    break;

case 401:
    storyText.innerHTML = "The jury is convinced, and the verdict is guilty. The stolen items are recovered, and justice is served.";
    createChoices([
        { text: "Celebrate your success.", nextScene: 724 },
        { text: "Reflect on what you learned.", nextScene: 725 }
    ]);
    break;

case 402:
    storyText.innerHTML = "You handle the tough questions well, impressing the jury with your knowledge.";
    createChoices([
        { text: "The verdict is in your favor.", nextScene: 726 },
        { text: "You receive praise from the judge.", nextScene: 727 }
    ]);
    break;

case 403:
    storyText.innerHTML = "Your engaging answers win the jury over, leading to a favorable verdict.";
    createChoices([
        { text: "You celebrate with your team.", nextScene: 728 },
        { text: "You plan your next case.", nextScene: 729 }
    ]);
    break;

case 404:
    storyText.innerHTML = "Winning over the toughest juror makes a difference, and the trial concludes successfully.";
    createChoices([
        { text: "You feel proud of your work.", nextScene: 730 },
        { text: "You prepare for new challenges ahead.", nextScene: 731 }
    ]);
    break;

case 405:
    storyText.innerHTML = "You celebrate your success with your team, knowing that your hard work has paid off.";
    endStory("The case is closed, and you feel a sense of accomplishment. Your reputation as a skilled detective continues to grow.");

case 406:
    storyText.innerHTML = "Reflecting on what you learned, you feel equipped to handle future cases with even more confidence.";
    endStory("You leave the courtroom knowing that you’ve made a difference in the community.");

function endStory(outcome) {
    storyText.innerHTML = outcome;
    choicesContainer.innerHTML = ""; // Clear choices
    // Optionally, you can add a button to restart or go back to the intro
}

    }
// Previous case logic...

function endStory(outcome) {
    storyText.innerHTML = outcome;
    choicesContainer.innerHTML = ""; // Clear choices

    // Create a button to restart the story
    const restartButton = document.createElement('button');
    restartButton.innerText = "Restart Story";
    restartButton.className = "restart-button"; // Optional: add a class for styling
    restartButton.onclick = function() {
        location.reload(); // Reloads the page to restart the story
    };

    choicesContainer.appendChild(restartButton); // Append the button to choices container
}


    
}

// Function to create choices dynamically
function createChoices(choices) {
    choices.forEach(choice => {
        const button = document.createElement("button");
        button.innerText = choice.text;
        button.className = "choice-button";
        button.onclick = () => showScene(choice.nextScene);
        choicesContainer.appendChild(button);
    });
}

// Initializing the game with the crime story
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("intro-screen").classList.remove("hidden");
});
