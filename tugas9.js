function anggota() {
    var peserta = {

        nama: ["Karina", "Aldi", "Stefan"],
        age: [20, 23, 19],
        posisi: ["Manager", "Director", "Director"],
    }

    for (var x in peserta) {
        console.log(peserta[x]);
            
    }
}

anggota()