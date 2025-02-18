const gearContext = `Interested in learning more?
Contact us here
[Gear Technologies logo](https://www.gear-tech.io/</>)Mobile menu
Menu
  * [[Gear Technologies]](https://www.gear-tech.io/</>)
  * [[Gear.exe]](https://www.gear-tech.io/</gear-exe>)
  * [[Vara Network]](https://www.gear-tech.io/<https:/vara.network>)
  * [[Gear Foundation]](https://www.gear-tech.io/</gear-foundation>)
  * [Contact Us]

_01 > Security
_02 > Increasing speed
_03 > Automation
//_Unlocking the power of Web3 while delivering a Web2-like user experience and increasing speed, security, and automation is a significant step forward in smart contract development_
Join our community and learn how you can benefit from this technology_
Build now[Whitepaper](https://www.gear-tech.io/<https:/whitepaper.gear.foundation>)Join our community
//_Gear Protocol
## Comprehensive toolkit for quick dApp creation
Gear Protocol offers exceptional technical capabilities and allows dApp developers to focus on their projects rather than building and operating an entirely new blockchain from scratch.
  * ### [Actor Model[Learn more]A well-known approach used in high frequency parallel computation, this model ensures asynchronous messaging and memory parallelism by design.Ensuring security, anonymity, transaction efficiency and as a result network speed, it stands as on of the core pillars of the Gear Protocol. Want to learn more about how it works? Check our Wiki.](https://www.gear-tech.io/<https:/wiki.vara.network/docs/about/technology/actor-model>)
  * ### [Persistent Memory[Learn more]The Persistent Memory concept is another novelty brought by Gear Protocol to Web3. It provides an innovative solution to program storage with clever and effective memory virtualization techniques. All you need is to code regular programs like in Web2 world, no need to be an expert in blockchain-specific programming. Check this Wiki to find more detailed information.](https://www.gear-tech.io/<https:/wiki.vara.network/docs/about/technology/persist-memory>)
  * ### [WASM (WebAssembly)[Learn more]Offering Native speed execution and support for standard programming languages, WebAssembly has been integrated by Gear Protocol to create an environment for fast, secure and flexible execution not just for smart-contracts but for onchain programs. Opening the door to new generation of applications. Sounds interesting? Check Wiki to dive in!](https://www.gear-tech.io/<https:/wiki.vara.network/docs/about/technology/WASM>)
  * ### [Gear.exe[Learn more]Gear.exe is a Vara-based, bridge-free runtime network compatible with the Ethereum ecosystem. It provides unlimited parallelism and an expressive application development platform to bring together the users and liquidity of Ethereum and its top L2s. We are building an Ethereum ecosystem with more than $60 billion in TVL and $2 billion in revenue. Imagine Solana's UX level with 10x TVL![Gear.exe illustration](https://www.gear-tech.io/_next/image?url=%2Fimages%2Fhomepage%2Fposter-eth-exe.png&w=1920&q=100)Your browser does not support the video tag.](https://www.gear-tech.io/</gear-exe>)


## Gear Protocol offers exceptional technical capabilities
These technological primitives enable advanced functionality such as:
Delayed messagingAsynchronous programming
Wasm speed
Gas reservationAlways for anyone
Unlocks numerous development possibilities
Parallel computations
DAPPs automation
//_Our products
## _01 >Vara Network
### A sovereign layer-1 decentralized network
Built on Gear Protocol, Vara is a layer-1 blockchain supporting developers to run Wasm-compiled smart contracts implemented via developer-friendly Rust libraries. Developers and users enjoy low transaction costs, gas fee rebates, staking, governance, and robust on-chain development capabilities, with optimized infrastructure for scalable performance and advanced security measures.Elevate your smart contract development experience with Vara
[Vara Network](https://www.gear-tech.io/<https:/vara.network>)
![Vara Network features illustration](https://www.gear-tech.io/_next/image?url=%2Fimages%2Fhomepage%2Fproduct_01.png&w=3840&q=100)
//_Our products
## _02 >Gear Foundation
### The core entity behind the Gear ecosystem
The Gear Foundation supports all Gear-related platforms, simplifying the dApp development process by empowering developers with supportive tools to build. Join the Gear community and become a driving force in powering blockchain advancement
[Gear Foundation](https://www.gear-tech.io/</gear-foundation>)
  * All
  * DeFi
  * Gaming

![Gear Foundation features illustration](https://www.gear-tech.io/_next/image?url=%2Fimages%2Fhomepage%2Fproduct_02.png&w=3840&q=100)
Gear Technologies logo
//_Connect with one of the fastest growing communities of developers and innovators all over the world that are building the new era of the internet_
  * ### Developers
    * [ Wiki](https://www.gear-tech.io/<https:/wiki.vara.network>)
    * [ Contract examples](https://www.gear-tech.io/<https:/wiki.vara.network/docs/examples/>)
    * [ Gear Idea](https://www.gear-tech.io/<https:/idea.gear-tech.io>)
  * ### Community
    * [ News](https://www.gear-tech.io/</news>)
    * [ Events](https://www.gear-tech.io/</events>)
    * Workshops
  * ### Company
    * [ About Gear](https://www.gear-tech.io/</>)
    * [ Whitepaper](https://www.gear-tech.io/<https:/whitepaper.gear.foundation>)
    * Contact Us
  * ### Social media
    * [ Gear X.com](https://www.gear-tech.io/<https:/twitter.com/gear_techs>)
    * [ Gear Github](https://www.gear-tech.io/<https:/github.com/gear-tech>)
    * [ Gear Discord](https://www.gear-tech.io/<https:/discord.gg/x8ZeSy6S6K>)
    * [ Gear Medium](https://www.gear-tech.io/<https:/medium.com/@gear_techs>)
    * [ Gear Telegram](https://www.gear-tech.io/<https:/t.me/gear_tech>)
    * [ Gear LinkedIn](https://www.gear-tech.io/<https:/www.linkedin.com/company/geartechnologies>)
    * [ Vara X.com](https://www.gear-tech.io/<https:/twitter.com/VaraNetwork>)
    * [ Vara Github](https://www.gear-tech.io/<https:/github.com/gear-foundation>)
    * [ Vara Discord](https://www.gear-tech.io/<https:/discord.gg/x8ZeSy6S6K>)
    * [ Vara Medium](https://www.gear-tech.io/<https:/medium.com/@VaraNetwork>)
    * [ Vara Telegram](https://www.gear-tech.io/<https:/t.me/VaraNetwork_Global>)


© 2025 Gear Technologies, Inc. All Rights Reserved`

import { Provider, IAgentRuntime, Memory, State } from "@elizaos/core";

const gearProvider: Provider = {
  get: async (runtime: IAgentRuntime, message: Memory, state?: State) => {
      return 'gearContext';
  }
};

export { gearProvider };