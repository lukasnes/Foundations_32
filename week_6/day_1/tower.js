const buildTower = n => {
    let tower = []

    for(let i = 0; i < n; i++){
        // tower.push(
        //     ' '.repeat(n - i - 1)
        //     + '*'.repeat((i * 2) + 1)
        //     + ' '.repeat(n - i - 1)
        //     )
        let space = ' '.repeat(n - i - 1)
        let star = '*'.repeat((i * 2) + 1)
        // tower.push(`${space}${star}${space}`)
        tower.push(space + star + space)
    }

    return tower
}

console.log(buildTower(5))
console.log(buildTower(7))
console.log(buildTower(10))

console.log('hello' + '                   ' + 'world')