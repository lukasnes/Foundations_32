const speakerData = [{
    id: 1,
    firstName: "Patten",
    lastName: "Goforth",
    bio: "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
    datetime: "2022-03-14 8:00:00",
    title: "nulla ac",
    length: 65,
    floor: 5,
    roomNumber: 3
  }, {
    id: 2,
    firstName: "Elonore",
    lastName: "Shipman",
    bio: "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
    datetime: "2022-03-14 09:00:00",
    title: "proin interdum",
    length: 170,
    floor: 3,
    roomNumber: 7
  }, {
    id: 3,
    firstName: "Connor",
    lastName: "McLucky",
    bio: "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
    datetime: "2022-03-14 18:30:00",
    title: "pede",
    length: 101,
    floor: 5,
    roomNumber: 9
  }, {
    id: 4,
    firstName: "Montgomery",
    lastName: "Tunkin",
    bio: "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.\n\nCurabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
    datetime: "2022-03-15 14:30:00",
    title: "ultrices",
    length: 89,
    floor: 2,
    roomNumber: 8
  }, {
    id: 5,
    firstName: "Horace",
    lastName: "Wheeler",
    bio: "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
    datetime: "2022-03-15 19:00:00",
    title: "quisque arcu libero",
    length: 113,
    floor: 2,
    roomNumber: 1
  }, {
    id: 6,
    firstName: "Marlena",
    lastName: "Yakovitch",
    bio: "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
    datetime: "2022-03-16 09:15:00",
    title: "suspendisse accumsan",
    length: 183,
    floor: 3,
    roomNumber: 7
  }, {
    id: 7,
    firstName: "Faydra",
    lastName: "Von Hindenburg",
    bio: "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
    datetime: "2022-03-16 11:30:00",
    title: "at diam nam tristique",
    length: 149,
    floor: 4,
    roomNumber: 9
  }, {
    id: 8,
    firstName: "Blaire",
    lastName: "Silverlock",
    bio: "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
    datetime: "2022-03-16 18:00:00",
    title: "suspendisse potenti",
    length: 117,
    floor: 3,
    roomNumber: 7
  }, {
    id: 9,
    firstName: "Doy",
    lastName: "Benasik",
    bio: "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
    datetime: "2022-03-17 10:00:00",
    title: "duis at velit",
    length: 83,
    floor: 5,
    roomNumber: 10
  }, {
    id: 10,
    firstName: "Antin",
    lastName: "O'Cannovane",
    bio: "Sed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
    datetime: "2022-03-17 19:30:00",
    title: "arcu sed augue",
    length: 143,
    floor: 3,
    roomNumber: 9
  }]

const main = document.querySelector('main')

function displayData() {
    console.log(speakerData)
    speakerData.forEach(session => {
        let {firstName, lastName, bio, datetime, title, length, floor, roomNumber} = session
        let titleStr = formatTitle(title)
        let startTimeStr = `${formatDate(datetime)} at ${formatTime(datetime)}`
        let lengthStr = formatLength(convertLength(length))
        let locationStr = formatLocation(floor, roomNumber)
        let speakerStr = `Speaker: ${firstName} ${lastName}`
        let bioStr = shortenBio(bio)

        let speakerCard = `
        <section>
            <div class="session-info">
                <h2>${titleStr}</h2>
                <h4>${startTimeStr}</h4>
                <h4>${lengthStr}</h4>
                <h4>${locationStr}</h4>
            </div>
            <hr/>
            <div class="speaker-info">
                <h3>${speakerStr}</h3>
                <p>${bioStr}</p>
                <button>See More</button>
            </div>
        </section>
        `

        main.innerHTML += speakerCard
    })
}

displayData()