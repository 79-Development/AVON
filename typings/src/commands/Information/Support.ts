import AvonCommand from "../../base/AvonCommand.js";

export default class Support extends AvonCommand {
  constructor(client: any) {
    super(client);
    this.name = "support";
    this.aliases = ["supp"];
    this.desc = "Provides you with the server link for the bot's support";
    this.cat = "info";
    this.exec = async (message: any, args: any, prefix: any) => {
      return message.reply({
        content: `Here You Go!`,
        components: [
          this.client.utils.actionRow([
            this.client.utils.button(
              `link`,
              `Invite Me`,
              null,
              null,
              `https://discord.com/api/oauth2/authorize?client_id=904317141866647592&permissions=8&scope=applications.commands%20bot`,
              this.client.emoji.invite
            ),
            this.client.utils.button(
              `link`,
              `Support Server`,
              null,
              null,
              `${this.client.config.server}`,
              this.client.emoji.support
            ),
          ]),
        ],
      });
    };
  }
}
