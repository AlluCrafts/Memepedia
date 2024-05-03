const memes = [
    { 
        name: "Doge", 
        description: "A Shiba Inu dog known for its comic sans captions.", 
        imageUrl: "https://variety.com/wp-content/uploads/2023/04/Twitter-Logo-Doge-Dogecoin.png", // Placeholder image URL
        keywords: ["dog", "shiba inu", "comic", "sans", "caption"] 
    },
    { 
        name: "Grumpy Cat", 
        description: "A cat known for its grumpy facial expression.", 
        imageUrl: "https://media.wired.com/photos/5cdefc28b2569892c06b2ae4/master/w_2560%2Cc_limit/Culture-Grumpy-Cat-487386121-2.jpg", // Placeholder image URL
        keywords: ["cat", "grumpy", "face", "expression"] 
    },
    { 
        name: "Success Kid", 
        description: "A child clenching his fist with a determined expression.", 
        imageUrl: "https://upload.wikimedia.org/wikipedia/en/f/ff/SuccessKid.jpg", // Placeholder image URL
        keywords: ["kid", "child", "clench", "fist", "determined"] 
    },
    { 
        name: "Rickroll", 
        description: "A prank internet meme involving the song 'Never Gonna Give You Up' by Rick Astley.", 
        imageUrl: "https://cdn.vox-cdn.com/uploads/chorus_asset/file/22312759/rickroll_4k.jpg", // Placeholder image URL
        keywords: ["rickroll", "prank", "song", "never gonna give you up", "rick astley"] 
    },
    { 
        name: "Nyan Cat", 
        description: "A pixelated cat with a Pop-Tart body flying through space.", 
        imageUrl: "https://m.media-amazon.com/images/M/MV5BNWY2MmE1YTMtMDg5My00MDllLWFmMTgtYTU3NzdhZTE2MDM1XkEyXkFqcGdeQXVyNzgxNDk0NTI@._V1_.jpg", // Placeholder image URL
        keywords: ["cat", "nyan", "pop-tart", "space"] 
    },
    { 
        name: "Bad Luck Brian", 
        description: "A young man smiling awkwardly with text describing various unfortunate events.", 
        imageUrl: "https://preview.redd.it/bad-luck-brian-meme-hd-upscaled-v0-syiviojoq72a1.jpg?width=640&crop=smart&auto=webp&s=ff2a696987520b82e5f43b2b79d8ef9f71ade4a4", // Placeholder image URL
        keywords: ["brian", "bad luck", "unfortunate", "events"] 
    },
    { 
        name: "Condescending Wonka", 
        description: "A screenshot of Gene Wilder as Willy Wonka with sarcastic and patronizing captions.", 
        imageUrl: "https://en.meming.world/images/en/1/12/Condescending_Willy_Wonka.jpg", // Placeholder image URL
        keywords: ["wonka", "gene wilder", "sarcastic", "patronizing", "captions"] 
    },
    { 
        name: "Hide the Pain Harold", 
        description: "A stock photograph of a man smiling while suppressing his emotional pain.", 
        imageUrl: "https://content.imageresizer.com/images/memes/Hide-the-pain-harold-meme-3.jpg", // Placeholder image URL
        keywords: ["harold", "hide the pain", "man", "smiling", "suppressing", "emotional pain"] 
    },
    { 
        name: "One Does Not Simply", 
        description: "A screenshot of Boromir from the movie 'Lord of the Rings' with the caption 'One does not simply [do something difficult].'." , 
        imageUrl: "https://imgflip.com/s/meme/One-Does-Not-Simply.jpg", // Placeholder image URL
        keywords: ["boromir", "lord of the rings", "one does not simply", "difficult"] 
    },
    { 
        name: "Philosoraptor", 
        description: "A CGI illustration of a Velociraptor with philosophical or scientific ponderings.", 
        imageUrl: "https://wiki.godvillegame.com/images/thumb/7/76/Prap.jpg/298px-Prap.jpg", // Placeholder image URL
        keywords: ["velociraptor", "philosophical", "scientific", "ponderings"] 
    },
    { 
        name: "The Most Interesting Man in the World", 
        description: "A photograph of actor Jonathan Goldsmith as a debonair, bearded man with captions beginning with 'I don't always [do something], but when I do, I [do something else].'." , 
        imageUrl: "https://165357.fs1.hubspotusercontent-na1.net/hubfs/165357/dos-equis.jpg#keepProtocol", // Placeholder image URL
        keywords: ["interesting", "man", "jonathan goldsmith", "debomair", "bearded", "captions"] 
    },
    { 
        name: "Scumbag Steve", 
        description: "A young man wearing a sideways cap with captions describing antisocial or obtuse behavior.", 
        imageUrl: "https://images.hindustantimes.com/tech/rf/image_size_800x600/HT/p1/2014/09/13/Incoming/Pictures/1263587_Wallpaper2.jpg", // Placeholder image URL
        keywords: ["steve", "sideways cap", "antisocial", "obtuse", "behavior"] 
    },
    { 
        name: "Y U No", 
        description: "A stick figure drawing with the caption 'Y U No [do something].'." , 
        imageUrl: "https://i.kym-cdn.com/entries/icons/original/000/004/006/YUNO.jpg", // Placeholder image URL
        keywords: ["y u no", "stick figure", "caption"] 
    },
    { 
        name: "Futurama Fry", 
        description: "A screenshot of the character Fry from the animated television show 'Futurama' with captions expressing paranoia and insecurity.", 
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdGhIlFTPRNfh8Oa8aWt93SscyO9T_kWZldCYL_WkvmQ&s", // Placeholder image URL
        keywords: ["futurama", "fry", "paranoia", "insecurity", "captions"] 
    },
    { 
        name: "SpongeBob Mocking", 
        description: "A series of images from the animated television show 'SpongeBob SquarePants' featuring the character SpongeBob imitating others in a distorted manner.", 
        imageUrl: "https://cdn.mobilesyrup.com/wp-content/uploads/2019/01/mocking-spongebob.jpg", // Placeholder image URL
        keywords: ["spongebob", "mocking", "distorted", "manner"] 
    },
    { 
        name: "Drakeposting", 
        description: "A two-panel image featuring rapper Drake, expressing approval and disapproval in each panel.", 
        imageUrl: "https://www.researchgate.net/publication/349338013/figure/fig1/AS:991751863017474@1613463478761/Drakeposting-internet-meme-source-knowyourmemecom.jpg", // Placeholder image URL
        keywords: ["drake", "approval", "disapproval", "panels"] 
    },
    { 
        name: "Surprised Pikachu", 
        description: "A screenshot of the character Pikachu from the animated television show 'Pokémon' with a surprised expression.", 
        imageUrl: "https://media.wired.com/photos/5f87340d114b38fa1f8339f9/master/w_1600%2Cc_limit/Ideas_Surprised_Pikachu_HD.jpg", // Placeholder image URL
        keywords: ["pikachu", "pokemon", "surprised", "expression"] 
    },
    { 
        name: "Arthur Fist", 
        description: "A screenshot from the animated television show 'Arthur' featuring the character Arthur's clenched fist.", 
        imageUrl: "https://cdn.vox-cdn.com/thumbor/05XlmZAYxiqj8faa_qJUuEcmtjI=/0x0:929x525/2000x1333/filters:focal(464x262:465x263)/cdn.vox-cdn.com/uploads/chorus_asset/file/15877061/Screen_Shot_2016-08-01_at_12.34.21_PM.0.0.1470069300.png", // Placeholder image URL
        keywords: ["arthur", "fist", "clenched"] 
    },
    { 
        name: "Evil Kermit", 
        description: "A screenshot of the Muppet character Kermit the Frog facing his evil doppelgänger in a dark hood.", 
        imageUrl: "https://i.guim.co.uk/img/media/3159275f03b6d13012c68de130bdae219f19acd1/43_0_817_490/master/817.jpg?width=1200&quality=85&auto=format&fit=max&s=20f3322cd3d4c7bfdb1c976a4bc2bcd6", // Placeholder image URL
        keywords: ["kermit", "muppet", "evil", "doppelgänger", "dark hood"] 
    },
    { 
        name: "Is This a Pigeon?", 
        description: "A still image from the anime series 'The Brave Fighter of Sun Fighbird' featuring a character mistaking a butterfly for a pigeon.", 
        imageUrl: "https://imageio.forbes.com/blogs-images/olliebarder/files/2018/05/pigeon_meme_fighbird-1200x806.jpg?height=477&width=711&fit=bounds", // Placeholder image URL
        keywords: ["pigeon", "butterfly", "anime", "brave fighter of sun figthbird", "mistaking"] 
    },
    // Add more memes with their descriptions, image URLs, and keywords here...
];

const searchInput = document.getElementById("searchInput");
const searchResults = document.getElementById("searchResults");

function renderMemes(filteredMemes) {
    searchResults.innerHTML = "";
    filteredMemes.forEach(meme => {
        const memeElement = document.createElement("div");
        memeElement.classList.add("meme");
        memeElement.innerHTML = `
            <img src="${meme.imageUrl}" alt="${meme.name}">
            <div>
                <h2>${meme.name}</h2>
                <p>${meme.description}</p>
            </div>
        `;
        memeElement.addEventListener("click", () => {
            alert(meme.description);
        });
        searchResults.appendChild(memeElement);
    });
}

function searchMemes() {
    const query = searchInput.value.toLowerCase();
    const filteredMemes = memes.filter(meme => 
        meme.name.toLowerCase().includes(query) || meme.keywords.some(keyword => keyword.includes(query))
    );

    if (filteredMemes.length === 0) {
        searchResults.innerHTML = "<p>No results found.</p>";
    } else {
        renderMemes(filteredMemes);
    }
}

searchInput.addEventListener("input", searchMemes);
