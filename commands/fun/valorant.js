const { MessageEmbed } = require('discord.js')
const Discord = require('discord.js')
module.exports = {
    name : 'valorant',
    aliases: ['valo' , 'agent' , 'valorant' ],
    





    run : async(client, message, args) => {


 const omen = new Discord.MessageEmbed ()
		  .setTitle('Omen')
		  .setDescription('Abilities: \n **C**: Shrouded Step \n **Q**: Paranoia \n  **E**: Dark Cover | **Signature** \n **X**: From the shadows | **Ultimate Ability **')
		.setImage ('https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt4e5af408cc7a87b5/5eb7cdc17bedc8627eff8deb/V_AGENTS_587x900_Omen.png')

const reyna = new Discord.MessageEmbed ()
		  .setTitle('Reyna')
		  .setDescription('Abilities: \n **C**: Leer | **Signature** \n **Q**: Devour \n  **E**: Dismiss \n **X**: Empress | **Ultimate Ability**')
		.setImage ('https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt6577b1f58530e6b2/5eb7cdc121a5027d77420208/V_AGENTS_587x900_Reyna.png')

const phoenix = new Discord.MessageEmbed ()
		  .setTitle('Phoenix')
		  .setDescription('Abilities: \n **C**: Blase  \n **Q**: Curveball \n  **E**: Hot hands | **Signature** \n **X**: Run It Back! | **Ultimate Ability 			**')
		.setImage ('https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltf0200e1821b5b39f/5eb7cdc144bf8261a04d87f9/V_AGENTS_587x900_Phx.png')



const sova = new Discord.MessageEmbed ()
		  .setTitle('Sova')
		  .setDescription("Abilities: \n **C**: Owl Drone  \n **Q**: Shock Bolt \n  **E**: Recon Bolt | **Signature** \n **X**: Hunter's Fury | **Ultimate Ability 			**")
		.setImage ('https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltf11234f4775729b7/5ebf2c275e73766852c8d5d4/V_AGENTS_587x900_ALL_Sova_2.png')

		
 const viper = new Discord.MessageEmbed ()
		  .setTitle('Viper')
		  .setDescription("Abilities: \n **C**: Snake Bite \n **Q**: Poison Cloud \n  **E**: Toxic Screen | **Signature** \n **X**: Viper's Pit | **Ultimate Ability **")
		.setImage ('https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltc825c6589eda7717/5eb7cdc6ee88132a6f6cfc25/V_AGENTS_587x900_Viper.png')

const sage = new Discord.MessageEmbed ()
		  .setTitle('Sage')
		  .setDescription('Abilities: \n **C**: Barrier Orb | **Signature** \n **Q**: Slow orb \n  **E**: Heal Orb \n **X**: Ressurection | **Ultimate Ability**')
		.setImage ('https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt8a627ec10b57f4f2/5eb7cdc16509f3370a5a93b7/V_AGENTS_587x900_sage.png')

const raze = new Discord.MessageEmbed ()
		  .setTitle('Raze')
		  .setDescription('Abilities: \n **C**: Boom Bot  \n **Q**: Blast pack \n  **E**: Paint shells | **Signature** \n **X**: Show Stopper | **Ultimate Ability 			**')
		.setImage ('https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt6fef56a8182d0a81/5ebf2c2798f79d6925dbd6b4/V_AGENTS_587x900_ALL_Raze_2.png')



const cypher = new Discord.MessageEmbed ()
		  .setTitle('Cypher')
		  .setDescription("Abilities: \n **C**: Trap Wire  \n **Q**: Cyber Cage \n  **E**: Spy Cam | **Signature** \n **X**: Neural Theft | **Ultimate Ability 			**")
		.setImage ('https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt158572ec37653cf3/5eb7cdc19df5cf37047009d1/V_AGENTS_587x900_Cypher.png')

		const brimstone = new Discord.MessageEmbed ()
		  .setTitle('Brimstone')
		  .setDescription("Abilities: \n **C**: Stim Beacon  \n **Q**: Incendiary \n  **E**: Sky smoke | **Signature** \n **X**: Orbital strike | **Ultimate Ability 			**")
		.setImage ('https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt26fcf1b5752514ee/5eb7cdbfc1dc88298d5d3799/V_AGENTS_587x900_Brimstone.png')

		const astra = new Discord.MessageEmbed ()
		  .setTitle('Astra')
		  .setDescription("Abilities: \n **C**: Gravity Well \n **Q**: Nova pulse \n  **E**: Nebula | **Signature** \n **X**: Astral form | **Ultimate Ability 			**")
		.setImage ('https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt5599d0d810824279/6036ca30ce4a0d12c3ec1dfa/V_AGENTS_587x900_Astra.png')

		const yoru = new Discord.MessageEmbed ()
		  .setTitle('Yoru')
		  .setDescription("Abilities: \n **C**: Fakeout  \n **Q**: Blind side \n  **E**: Gate Crash | **Signature** \n **X**: Dimensional Drift | **Ultimate Ability 			**")
		.setImage ('https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltd4080f8efb365751/5ff5660bb47cdf7fc7d6c3dc/V_AGENTS_587x900_yoru.png')

		const skye = new Discord.MessageEmbed ()
		  .setTitle('Skye')
		  .setDescription("Abilities: \n **C**: Regrowth  \n **Q**: Trail blazer \n  **E**: Guiding Light | **Signature** \n **X**: Seekers | **Ultimate Ability 			**")
		.setImage ('https://static.wikia.nocookie.net/valorant/images/b/b9/Skye_Keyart_final.png')

		const jett = new Discord.MessageEmbed ()
		 .setTitle('Jett')
		 .setDescription("Abilities: \n**C**: Cloudburst \n**Q**: Updraft \n**E**: Tailwind | **Signature** \n**X** Blade Storm | **Ultimate Ability**")
		 .setImage('https://static.wikia.nocookie.net/valorant/images/7/79/Jett_artwork.png')


		const killjoy = new Discord.MessageEmbed ()
		 .setTitle('Killjoy')
		 .setDescription("Abilities: \n**C**: Nanoswarm \n**Q**: Alarm Bot \n**E**: Turret | **Signature** \n**X** Lockdown | **Ultimate Ability**")
		 .setImage('https://static.wikia.nocookie.net/valorant/images/8/8c/Killjoy.png')






		



      
	    if (!args[0]) {
       
		message.channel.send ("<:xmark:848019597907329085> **Please type in a valorant agent name**")
	  } 
	  if (args[0] === 'omen') { 
		 
		  message.channel.send (omen)
		   return
	  
	  }

	  	  if (args[0] === 'reyna') { 
		 
		  message.channel.send (reyna)
		   return
	  
	  }

	  if (args[0] === 'phoenix') { 
		 
		  message.channel.send (phoenix)
		   return
	  
	  }


	   if (args[0] === 'sova') { 
		 
		  message.channel.send (sova)
		   return
	  
	  }

	    if (args[0] === 'viper') { 
		 
		  message.channel.send (viper)
		   return
	  
	  }

	  	  if (args[0] === 'sage') { 
		 
		  message.channel.send (sage)
		   return
	  
	  }

	  if (args[0] === 'raze') { 
		 
		  message.channel.send (raze)
		   return
	  
	  }


	   if (args[0] === 'cypher') { 
		 
		  message.channel.send (cypher)
		   return
	  
	  }

	  if (args[0] === 'brimstone') { 
		 
		  message.channel.send (brimstone)
		   return
	  
	  }
	  if (args[0] === 'astra') { 
		 
		  message.channel.send (astra)
		   return
	  
	  }

	  if (args[0] === 'yoru') { 
		 
		  message.channel.send (yoru)
		   return
	  
	  }

	  if (args[0] === 'skye') { 
		 
		  message.channel.send (skye)
		   return
	  
	  }

	  if (args[0] === 'jett') { 
		 
		message.channel.send (jett)
		 return
	
	}

	if (args[0] === 'killjoy') { 
		 
		message.channel.send (killjoy)
		 return
	
	}

    }
}
