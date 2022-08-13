//ROLE PICKER SCRIPT
let roleRandom = document.getElementById('roleRandom')

const acakRole = () => {
    const role = ["JUNGLER", "ROAMER", "GOLDLANER", "EXPLANER", "MIDLANER"]
    let roleGenerator = ''
    roleGenerator = role[~~(Math.random() * role.length)]
    return roleGenerator

}

const randomButton = () => {
    const newRole = acakRole()
    roleRandom.value = newRole
    alert(`MAMPUS LO MAIN ${newRole}`)
}

//HERO PICKER SCRIPT
function roamerButton() {
    const heroRoamer = [
        'akai.png','angela.png', 'atlas.png', 'baxia.png',
        'belerick.png', 'benedeta.png', 'carmila.png', 'chou.png',
        'diggie.png', 'edith.png', 'estes.png', 'faramis.png',
        'floryn.png', 'franco.png', 'fredrin.png' ,'gatot.png', 'gloo.png',
        'grock.png', 'guinevere.png', 'hilda.png', 'hylos.png',
        'jawhead.png', 'johnson.png', 'julian.png', 'kadita.png',
        'kaja.png', 'khaleed.png', 'khufra.png', 'lolita.png',
        'martis.png', 'masha.png', 'mathilda.png', 'minotaur.png',
        'minsithar.png', 'natalia.png', 'rafaela.png', 'ruby.png',
        'selena.png', 'silvana.png', 'tigreal.png', 'valentina.png',
        'valir.png', 'zilong.png']
    let randomRoamer = Math.floor(Math.random() * heroRoamer.length)
    let selectRoamer = heroRoamer[randomRoamer]
    document.getElementById('roamer').src = `./assets/roamer/${selectRoamer}`
    alert(`anda bermain roam dengan hero ${selectRoamer}`)
}

function goldlanerButton() {
    const heroGoldlaner = [
        'aldous.png', 'beatrix.png', 'benedeta.png', 'brody.png',
        'bruno.png', 'cecilion.png', 'change.png', 'claude.png',
        'clint.png', 'cyclops.png', 'fanny.png', 'granger.png',
        'gusion.png', 'hanabi.png', 'harith.png', 'harley.png',
        'irithel.png', 'karrie.png', 'kimmy.png', 'layla.png',
        'lesley.png', 'lilya.png', 'lunox.png', 'melissa.png',
        'miya.png', 'moskov.png', 'nana.png', 'natalia.png',
        'nathan.png', 'pharsa.png', 'popol.png', 'saber.png',
        'wanwan.png', 'zhask.png'
    ]

    let randomGoldlaner = Math.floor(Math.random() * heroGoldlaner.length)
    let selectGoldlaner = heroGoldlaner[randomGoldlaner]
    document.getElementById('goldlaner').src = `./assets/goldlaner/${selectGoldlaner}`

    alert(`anda bermain goldlane dengan hero ${selectGoldlaner}`)
}

function junglerButton() {
    const heroJungler = [
        'aamon.png', 'akai.png', 'aldous.png', 'alpha.png',
        'alucard.png', 'aulus.png', 'badang.png', 'bane.png',
        'barats.png', 'baxia.png', 'benedeta.png', 'chou.png',
        'dyroth.png', 'granger.png', 'gusion.png', 'hanzo.png',
        'harith.png', 'harley.png', 'hayabusa.png', 'helcurt.png',
        'hylos.png', 'julian.png', 'karina.png', 'khufra.png',
        'lancelot.png', 'leomord.png', 'ling.png', 'martis.png',
        'natalia.png', 'nathan.png', 'paquito.png', 'roger.png',
        'saber.png', 'sun.png', 'thamuz.png', 'uranus.png',
        'xborg.png', 'yin.png', 'yss.png', 'zilong.png'
    ]

    let randomJungler = Math.floor(Math.random() * heroJungler.length)
    let selectJungler = heroJungler[randomJungler]
    document.getElementById('jungler').src = `./assets/jungler/${selectJungler}`
    alert(`anda bermain jungle dengan hero ${selectJungler}`)
}

function midlanerButton() {
    const heroMidlaner = [
        'aldous.png', 'alice.png', 'angela.png', 'aurora.png',
        'beatrix.png', 'cecilion.png', 'change.png', 'cyclops.png',
        'diggie.png', 'eudora.png', 'faramis.png', 'gord.png',
        'harith.png', 'harley.png', 'julian.png', 'kadita.png',
        'kagura.png', 'kaja.png', 'kimmy.png', 'lilya.png',
        'lunox.png', 'nana.png', 'odette.png', 'pharsa.png',
        'selena.png', 'vale.png', 'valentina.png', 'valir.png',
        'vexana.png', 'xavier.png', 'yve.png', 'zhask.png'
    ]
    let randomMidlaner = Math.floor(Math.random() * heroMidlaner.length)
    let selectMidlaner = heroMidlaner[randomMidlaner]
    document.getElementById('midlaner').src = `./assets/midlaner/${selectMidlaner}`
    alert(`anda bermain midlane dengan hero ${selectMidlaner}`)
}

function explanerButton() {
    const heroExplaner = [
        'akai.png', 'aldous.png', 'alice.png', 'alpha.png',
        'alucard.png', 'angela.png', 'argus.png', 'aulus.png',
        'badang.png', 'balmond.png', 'bane.png', 'barats.png',
        'baxia.png', 'belerick.png', 'benedeta.png', 'carmila.png', 'chou.png',
        'dyroth.png', 'edith.png', 'esmeralda.png', 'franco.png',
        'franco.png', 'fredrin.png', 'freya.png', 'gatot.png',
        'gloo.png', 'grock.png', 'hilda.png', 'hylos.png',
        'jawhead.png', 'julian.png', 'kaja.png', 'khaleed.png',
        'khufra.png', 'lapu.png', 'leomord.png', 'martis.png',
        'masha.png', 'minotaur.png', 'paquito.png', 'phoveus.png',
        'ruby.png', 'silvana.png', 'sun.png', 'terizla.png',
        'thamuz.png', 'tigreal.png', 'uranus.png', 'xborg.png',
        'yin.png', 'yuzhong.png', 'zilong.png'
    ]
    let randomExplaner = Math.floor(Math.random() * heroExplaner.length)
    let selectExplaner = heroExplaner[randomExplaner]
    document.getElementById('explaner').src = `./assets/explaner/${selectExplaner}`
    alert(`anda bermain explane dengan hero ${selectExplaner}`)   
}
