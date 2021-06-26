const seedPostValues = async function (postTable) {
    postTable
        .bulkCreate([
            //       if we need to Initialize table with some data
            {
                caption: "It looks amazing",
                description: "JUST A RANDOM GOOGLE IMAGE",
                numberOfLikes: "50",
                numberOfShares: "10",
                userid: 1,
                image_url:
                    "https://www.prayananimation.com/blog/wp-content/uploads/2017/09/blog.jpg",
                postType: "Photo",
            },
            {
                caption: "It looks amazing",
                description: "JUST A RANDOM GOOGLE IMAGE",
                numberOfLikes: "50",
                numberOfShares: "10",
                userid: 1,
                image_url:
                    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/07f7a6bb-2d35-4630-93fc-be249af22b3e/deguk1f-407a6077-4681-4cd3-8756-08fafca298e2.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvMDdmN2E2YmItMmQzNS00NjMwLTkzZmMtYmUyNDlhZjIyYjNlXC9kZWd1azFmLTQwN2E2MDc3LTQ2ODEtNGNkMy04NzU2LTA4ZmFmY2EyOThlMi5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.aJB5_Wr4EvoVLxry8wNb7hRbq8pQRJRkaKGTqJyFOG8",
                postType: "Photo",
            },
            {
                caption: "It looks amazing",
                description: "JUST A RANDOM GOOGLE IMAGE",
                numberOfLikes: "50",
                numberOfShares: "10",
                userid: 1,
                image_url:
                    "../../../../assets/wallpaper1.jpg",
                postType: "Photo",
            },
            {
                caption: "It looks amazing",
                description: "JUST A RANDOM GOOGLE IMAGE",
                numberOfLikes: "50",
                numberOfShares: "10",
                userid: 1,
                image_url:
                    "../../../../assets/wallpaper2.jpg",
                postType: "Photo",
            },
            {
                caption: "It looks amazing",
                description: "JUST A RANDOM GOOGLE IMAGE",
                numberOfLikes: "50",
                numberOfShares: "10",
                userid: 1,
                image_url:
                    "../../../../assets/wallpaper3.jpg",
                postType: "Photo",
            },
            {
                caption: "It looks amazing",
                description: "JUST A RANDOM GOOGLE IMAGE",
                numberOfLikes: "50",
                numberOfShares: "10",
                userid: 1,
                image_url:
                    "../../../../assets/wallpaper4.jpg",
                postType: "Photo",
            },
            {
                caption: "It looks amazing",
                description: "JUST A RANDOM GOOGLE IMAGE",
                numberOfLikes: "50",
                numberOfShares: "10",
                userid: 4,
                image_url:
                    "../../../../assets/wallpaper5.jpg",
                postType: "Photo",
            },
            {
                caption: "It looks amazing",
                description: "JUST A RANDOM GOOGLE IMAGE",
                numberOfLikes: "50",
                numberOfShares: "10",
                userid: 4,
                image_url:
                    "../../../../assets/wallpaper6.jpg",
                postType: "Photo",
            },
            {
                caption: "It looks amazing",
                description: "JUST A RANDOM GOOGLE IMAGE",
                numberOfLikes: "50",
                numberOfShares: "10",
                userid: 4,
                image_url:
                    "../../../../assets/wallpaper7.jpg",
                postType: "Photo",
            },
            {
                caption: "It looks amazing",
                description: "JUST A RANDOM GOOGLE IMAGE",
                numberOfLikes: "50",
                numberOfShares: "10",
                userid: 4,
                image_url:
                    "../../../../assets/wallpaper8.jpg",
                postType: "Photo",
            },
            {
                caption: "It looks amazing",
                description: "JUST A RANDOM GOOGLE IMAGE",
                numberOfLikes: "50",
                numberOfShares: "10",
                userid: 3,
                image_url:
                    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/faa48d2d-12c2-43d1-bf23-b5e99857825b/dd0paei-d3750bea-3244-44d8-a8a1-1775e3be14a3.png/v1/fill/w_1024,h_576,q_80,strp/crow_spirit_by_ellysiumn_dd0paei-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD01NzYiLCJwYXRoIjoiXC9mXC9mYWE0OGQyZC0xMmMyLTQzZDEtYmYyMy1iNWU5OTg1NzgyNWJcL2RkMHBhZWktZDM3NTBiZWEtMzI0NC00NGQ4LWE4YTEtMTc3NWUzYmUxNGEzLnBuZyIsIndpZHRoIjoiPD0xMDI0In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.qUu1zhYptY8cS7RkecXB1IQ_AcDV4amWOKSbu4tzr5w",
                postType: "Photo",
            },
            {
                caption: "It looks amazing",
                description: "JUST A RANDOM GOOGLE IMAGE",
                numberOfLikes: "50",
                numberOfShares: "10",
                userid: 3,
                image_url:
                    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/faa48d2d-12c2-43d1-bf23-b5e99857825b/dd0paei-d3750bea-3244-44d8-a8a1-1775e3be14a3.png/v1/fill/w_1024,h_576,q_80,strp/crow_spirit_by_ellysiumn_dd0paei-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD01NzYiLCJwYXRoIjoiXC9mXC9mYWE0OGQyZC0xMmMyLTQzZDEtYmYyMy1iNWU5OTg1NzgyNWJcL2RkMHBhZWktZDM3NTBiZWEtMzI0NC00NGQ4LWE4YTEtMTc3NWUzYmUxNGEzLnBuZyIsIndpZHRoIjoiPD0xMDI0In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.qUu1zhYptY8cS7RkecXB1IQ_AcDV4amWOKSbu4tzr5w",
                postType: "Photo",
            },
            {
                caption: "It looks amazing",
                description: "JUST A RANDOM GOOGLE IMAGE",
                numberOfLikes: "50",
                numberOfShares: "10",
                userid: 3,
                image_url:
                    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/faa48d2d-12c2-43d1-bf23-b5e99857825b/dd0paei-d3750bea-3244-44d8-a8a1-1775e3be14a3.png/v1/fill/w_1024,h_576,q_80,strp/crow_spirit_by_ellysiumn_dd0paei-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD01NzYiLCJwYXRoIjoiXC9mXC9mYWE0OGQyZC0xMmMyLTQzZDEtYmYyMy1iNWU5OTg1NzgyNWJcL2RkMHBhZWktZDM3NTBiZWEtMzI0NC00NGQ4LWE4YTEtMTc3NWUzYmUxNGEzLnBuZyIsIndpZHRoIjoiPD0xMDI0In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.qUu1zhYptY8cS7RkecXB1IQ_AcDV4amWOKSbu4tzr5w",
                postType: "Photo",
            },
            {
                caption: "It looks amazing",
                description: "JUST A RANDOM GOOGLE IMAGE",
                numberOfLikes: "50",
                numberOfShares: "10",
                userid: 3,
                image_url:
                    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/faa48d2d-12c2-43d1-bf23-b5e99857825b/dd0paei-d3750bea-3244-44d8-a8a1-1775e3be14a3.png/v1/fill/w_1024,h_576,q_80,strp/crow_spirit_by_ellysiumn_dd0paei-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD01NzYiLCJwYXRoIjoiXC9mXC9mYWE0OGQyZC0xMmMyLTQzZDEtYmYyMy1iNWU5OTg1NzgyNWJcL2RkMHBhZWktZDM3NTBiZWEtMzI0NC00NGQ4LWE4YTEtMTc3NWUzYmUxNGEzLnBuZyIsIndpZHRoIjoiPD0xMDI0In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.qUu1zhYptY8cS7RkecXB1IQ_AcDV4amWOKSbu4tzr5w",
                postType: "Photo",
            },
            {
                caption: "It looks amazing",
                description: "JUST A RANDOM GOOGLE IMAGE",
                numberOfLikes: "50",
                numberOfShares: "10",
                userid: 2,
                image_url:
                    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/faa48d2d-12c2-43d1-bf23-b5e99857825b/dd0paei-d3750bea-3244-44d8-a8a1-1775e3be14a3.png/v1/fill/w_1024,h_576,q_80,strp/crow_spirit_by_ellysiumn_dd0paei-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD01NzYiLCJwYXRoIjoiXC9mXC9mYWE0OGQyZC0xMmMyLTQzZDEtYmYyMy1iNWU5OTg1NzgyNWJcL2RkMHBhZWktZDM3NTBiZWEtMzI0NC00NGQ4LWE4YTEtMTc3NWUzYmUxNGEzLnBuZyIsIndpZHRoIjoiPD0xMDI0In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.qUu1zhYptY8cS7RkecXB1IQ_AcDV4amWOKSbu4tzr5w",
                postType: "Photo",
            },
            {
                caption: "It looks amazing",
                description: "JUST A RANDOM GOOGLE IMAGE",
                numberOfLikes: "50",
                numberOfShares: "10",
                userid: 2,
                image_url:
                    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/faa48d2d-12c2-43d1-bf23-b5e99857825b/dd0paei-d3750bea-3244-44d8-a8a1-1775e3be14a3.png/v1/fill/w_1024,h_576,q_80,strp/crow_spirit_by_ellysiumn_dd0paei-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD01NzYiLCJwYXRoIjoiXC9mXC9mYWE0OGQyZC0xMmMyLTQzZDEtYmYyMy1iNWU5OTg1NzgyNWJcL2RkMHBhZWktZDM3NTBiZWEtMzI0NC00NGQ4LWE4YTEtMTc3NWUzYmUxNGEzLnBuZyIsIndpZHRoIjoiPD0xMDI0In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.qUu1zhYptY8cS7RkecXB1IQ_AcDV4amWOKSbu4tzr5w",
                postType: "Photo",
            },
            {
                caption: "It looks amazing",
                description: "JUST A RANDOM GOOGLE IMAGE",
                numberOfLikes: "50",
                numberOfShares: "10",
                userid: 2,
                image_url:
                    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/faa48d2d-12c2-43d1-bf23-b5e99857825b/dd0paei-d3750bea-3244-44d8-a8a1-1775e3be14a3.png/v1/fill/w_1024,h_576,q_80,strp/crow_spirit_by_ellysiumn_dd0paei-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD01NzYiLCJwYXRoIjoiXC9mXC9mYWE0OGQyZC0xMmMyLTQzZDEtYmYyMy1iNWU5OTg1NzgyNWJcL2RkMHBhZWktZDM3NTBiZWEtMzI0NC00NGQ4LWE4YTEtMTc3NWUzYmUxNGEzLnBuZyIsIndpZHRoIjoiPD0xMDI0In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.qUu1zhYptY8cS7RkecXB1IQ_AcDV4amWOKSbu4tzr5w",
                postType: "Photo",
            },
            {
                caption: "It looks amazing",
                description: "JUST A RANDOM GOOGLE IMAGE",
                numberOfLikes: "50",
                numberOfShares: "10",
                userid: 2,
                image_url:
                    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/faa48d2d-12c2-43d1-bf23-b5e99857825b/dd0paei-d3750bea-3244-44d8-a8a1-1775e3be14a3.png/v1/fill/w_1024,h_576,q_80,strp/crow_spirit_by_ellysiumn_dd0paei-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD01NzYiLCJwYXRoIjoiXC9mXC9mYWE0OGQyZC0xMmMyLTQzZDEtYmYyMy1iNWU5OTg1NzgyNWJcL2RkMHBhZWktZDM3NTBiZWEtMzI0NC00NGQ4LWE4YTEtMTc3NWUzYmUxNGEzLnBuZyIsIndpZHRoIjoiPD0xMDI0In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.qUu1zhYptY8cS7RkecXB1IQ_AcDV4amWOKSbu4tzr5w",
                postType: "Photo",
            },
            {
                caption: "It looks amazing",
                description: "JUST A RANDOM GOOGLE IMAGE",
                numberOfLikes: "50",
                numberOfShares: "10",
                userid: 1,
                image_url:
                    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/faa48d2d-12c2-43d1-bf23-b5e99857825b/dd0paei-d3750bea-3244-44d8-a8a1-1775e3be14a3.png/v1/fill/w_1024,h_576,q_80,strp/crow_spirit_by_ellysiumn_dd0paei-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD01NzYiLCJwYXRoIjoiXC9mXC9mYWE0OGQyZC0xMmMyLTQzZDEtYmYyMy1iNWU5OTg1NzgyNWJcL2RkMHBhZWktZDM3NTBiZWEtMzI0NC00NGQ4LWE4YTEtMTc3NWUzYmUxNGEzLnBuZyIsIndpZHRoIjoiPD0xMDI0In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.qUu1zhYptY8cS7RkecXB1IQ_AcDV4amWOKSbu4tzr5w",
                postType: "Photo",
            },
            {
                caption: "It looks amazing",
                description: "JUST A RANDOM GOOGLE IMAGE",
                numberOfLikes: "50",
                numberOfShares: "10",
                userid: 2,
                image_url:
                    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/faa48d2d-12c2-43d1-bf23-b5e99857825b/dd0paei-d3750bea-3244-44d8-a8a1-1775e3be14a3.png/v1/fill/w_1024,h_576,q_80,strp/crow_spirit_by_ellysiumn_dd0paei-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD01NzYiLCJwYXRoIjoiXC9mXC9mYWE0OGQyZC0xMmMyLTQzZDEtYmYyMy1iNWU5OTg1NzgyNWJcL2RkMHBhZWktZDM3NTBiZWEtMzI0NC00NGQ4LWE4YTEtMTc3NWUzYmUxNGEzLnBuZyIsIndpZHRoIjoiPD0xMDI0In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.qUu1zhYptY8cS7RkecXB1IQ_AcDV4amWOKSbu4tzr5w",
                postType: "Photo",
            },
            {
                caption: "It looks amazing",
                description: "JUST A RANDOM GOOGLE IMAGE",
                numberOfLikes: "50",
                numberOfShares: "10",
                userid: 3,
                image_url:
                    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/faa48d2d-12c2-43d1-bf23-b5e99857825b/dd0paei-d3750bea-3244-44d8-a8a1-1775e3be14a3.png/v1/fill/w_1024,h_576,q_80,strp/crow_spirit_by_ellysiumn_dd0paei-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD01NzYiLCJwYXRoIjoiXC9mXC9mYWE0OGQyZC0xMmMyLTQzZDEtYmYyMy1iNWU5OTg1NzgyNWJcL2RkMHBhZWktZDM3NTBiZWEtMzI0NC00NGQ4LWE4YTEtMTc3NWUzYmUxNGEzLnBuZyIsIndpZHRoIjoiPD0xMDI0In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.qUu1zhYptY8cS7RkecXB1IQ_AcDV4amWOKSbu4tzr5w",
                postType: "Photo",
            },
            {
                caption: "It looks Wonderful",
                description: "JUST A RANDOM GOOGLE IMAGE",
                numberOfLikes: "50",
                numberOfShares: "10",
                userid: 2,
                image_url:
                    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/faa48d2d-12c2-43d1-bf23-b5e99857825b/dd0paei-d3750bea-3244-44d8-a8a1-1775e3be14a3.png/v1/fill/w_1024,h_576,q_80,strp/crow_spirit_by_ellysiumn_dd0paei-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD01NzYiLCJwYXRoIjoiXC9mXC9mYWE0OGQyZC0xMmMyLTQzZDEtYmYyMy1iNWU5OTg1NzgyNWJcL2RkMHBhZWktZDM3NTBiZWEtMzI0NC00NGQ4LWE4YTEtMTc3NWUzYmUxNGEzLnBuZyIsIndpZHRoIjoiPD0xMDI0In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.qUu1zhYptY8cS7RkecXB1IQ_AcDV4amWOKSbu4tzr5w",
                postType: "Photo",
            },
            {
                caption: "It looks amazing",
                description: "JUST A RANDOM GOOGLE IMAGE",
                numberOfLikes: "50",
                numberOfShares: "10",
                userid: 3,
                image_url:
                    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/faa48d2d-12c2-43d1-bf23-b5e99857825b/dd0paei-d3750bea-3244-44d8-a8a1-1775e3be14a3.png/v1/fill/w_1024,h_576,q_80,strp/crow_spirit_by_ellysiumn_dd0paei-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD01NzYiLCJwYXRoIjoiXC9mXC9mYWE0OGQyZC0xMmMyLTQzZDEtYmYyMy1iNWU5OTg1NzgyNWJcL2RkMHBhZWktZDM3NTBiZWEtMzI0NC00NGQ4LWE4YTEtMTc3NWUzYmUxNGEzLnBuZyIsIndpZHRoIjoiPD0xMDI0In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.qUu1zhYptY8cS7RkecXB1IQ_AcDV4amWOKSbu4tzr5w",
                postType: "Photo",
            },
            {
                caption: "It looks Wonderful",
                description: "JUST A RANDOM GOOGLE IMAGE",
                numberOfLikes: "50",
                numberOfShares: "10",
                userid: 4,
                image_url:
                    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/faa48d2d-12c2-43d1-bf23-b5e99857825b/dd0paei-d3750bea-3244-44d8-a8a1-1775e3be14a3.png/v1/fill/w_1024,h_576,q_80,strp/crow_spirit_by_ellysiumn_dd0paei-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD01NzYiLCJwYXRoIjoiXC9mXC9mYWE0OGQyZC0xMmMyLTQzZDEtYmYyMy1iNWU5OTg1NzgyNWJcL2RkMHBhZWktZDM3NTBiZWEtMzI0NC00NGQ4LWE4YTEtMTc3NWUzYmUxNGEzLnBuZyIsIndpZHRoIjoiPD0xMDI0In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.qUu1zhYptY8cS7RkecXB1IQ_AcDV4amWOKSbu4tzr5w",
                postType: "Photo",
            },
            {
                caption: "It looks amazing",
                description: "JUST A RANDOM GOOGLE IMAGE",
                numberOfLikes: "50",
                numberOfShares: "10",
                userid: 5,
                image_url:
                    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/faa48d2d-12c2-43d1-bf23-b5e99857825b/dd0paei-d3750bea-3244-44d8-a8a1-1775e3be14a3.png/v1/fill/w_1024,h_576,q_80,strp/crow_spirit_by_ellysiumn_dd0paei-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD01NzYiLCJwYXRoIjoiXC9mXC9mYWE0OGQyZC0xMmMyLTQzZDEtYmYyMy1iNWU5OTg1NzgyNWJcL2RkMHBhZWktZDM3NTBiZWEtMzI0NC00NGQ4LWE4YTEtMTc3NWUzYmUxNGEzLnBuZyIsIndpZHRoIjoiPD0xMDI0In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.qUu1zhYptY8cS7RkecXB1IQ_AcDV4amWOKSbu4tzr5w",
                postType: "Photo",
            },
            {
                caption: "It looks Wonderful",
                description: "JUST A RANDOM GOOGLE IMAGE",
                numberOfLikes: "50",
                numberOfShares: "10",
                userid: 1,
                image_url:
                    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/faa48d2d-12c2-43d1-bf23-b5e99857825b/dd0paei-d3750bea-3244-44d8-a8a1-1775e3be14a3.png/v1/fill/w_1024,h_576,q_80,strp/crow_spirit_by_ellysiumn_dd0paei-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD01NzYiLCJwYXRoIjoiXC9mXC9mYWE0OGQyZC0xMmMyLTQzZDEtYmYyMy1iNWU5OTg1NzgyNWJcL2RkMHBhZWktZDM3NTBiZWEtMzI0NC00NGQ4LWE4YTEtMTc3NWUzYmUxNGEzLnBuZyIsIndpZHRoIjoiPD0xMDI0In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.qUu1zhYptY8cS7RkecXB1IQ_AcDV4amWOKSbu4tzr5w",
                postType: "Photo",
            },
            {
                caption: "It looks amazing",
                description: "JUST A RANDOM GOOGLE IMAGE",
                numberOfLikes: "50",
                numberOfShares: "10",
                userid: 2,
                image_url:
                    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/faa48d2d-12c2-43d1-bf23-b5e99857825b/dd0paei-d3750bea-3244-44d8-a8a1-1775e3be14a3.png/v1/fill/w_1024,h_576,q_80,strp/crow_spirit_by_ellysiumn_dd0paei-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD01NzYiLCJwYXRoIjoiXC9mXC9mYWE0OGQyZC0xMmMyLTQzZDEtYmYyMy1iNWU5OTg1NzgyNWJcL2RkMHBhZWktZDM3NTBiZWEtMzI0NC00NGQ4LWE4YTEtMTc3NWUzYmUxNGEzLnBuZyIsIndpZHRoIjoiPD0xMDI0In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.qUu1zhYptY8cS7RkecXB1IQ_AcDV4amWOKSbu4tzr5w",
                postType: "Photo",
            },
            {
                caption: "It looks Wonderful",
                description: "JUST A RANDOM GOOGLE IMAGE",
                numberOfLikes: "50",
                numberOfShares: "10",
                userid: 3,
                image_url:
                    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/faa48d2d-12c2-43d1-bf23-b5e99857825b/dd0paei-d3750bea-3244-44d8-a8a1-1775e3be14a3.png/v1/fill/w_1024,h_576,q_80,strp/crow_spirit_by_ellysiumn_dd0paei-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD01NzYiLCJwYXRoIjoiXC9mXC9mYWE0OGQyZC0xMmMyLTQzZDEtYmYyMy1iNWU5OTg1NzgyNWJcL2RkMHBhZWktZDM3NTBiZWEtMzI0NC00NGQ4LWE4YTEtMTc3NWUzYmUxNGEzLnBuZyIsIndpZHRoIjoiPD0xMDI0In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.qUu1zhYptY8cS7RkecXB1IQ_AcDV4amWOKSbu4tzr5w",
                postType: "Photo",
            },
            {
                caption: "It looks amazing",
                description: "JUST A RANDOM GOOGLE IMAGE",
                numberOfLikes: "50",
                numberOfShares: "10",
                userid: 4,
                image_url:
                    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/faa48d2d-12c2-43d1-bf23-b5e99857825b/dd0paei-d3750bea-3244-44d8-a8a1-1775e3be14a3.png/v1/fill/w_1024,h_576,q_80,strp/crow_spirit_by_ellysiumn_dd0paei-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD01NzYiLCJwYXRoIjoiXC9mXC9mYWE0OGQyZC0xMmMyLTQzZDEtYmYyMy1iNWU5OTg1NzgyNWJcL2RkMHBhZWktZDM3NTBiZWEtMzI0NC00NGQ4LWE4YTEtMTc3NWUzYmUxNGEzLnBuZyIsIndpZHRoIjoiPD0xMDI0In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.qUu1zhYptY8cS7RkecXB1IQ_AcDV4amWOKSbu4tzr5w",
                postType: "Photo",
            },
            {
                caption: "It looks Wonderful",
                description: "JUST A RANDOM GOOGLE IMAGE",
                numberOfLikes: "50",
                numberOfShares: "10",
                userid: 5,
                image_url:
                    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/faa48d2d-12c2-43d1-bf23-b5e99857825b/dd0paei-d3750bea-3244-44d8-a8a1-1775e3be14a3.png/v1/fill/w_1024,h_576,q_80,strp/crow_spirit_by_ellysiumn_dd0paei-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD01NzYiLCJwYXRoIjoiXC9mXC9mYWE0OGQyZC0xMmMyLTQzZDEtYmYyMy1iNWU5OTg1NzgyNWJcL2RkMHBhZWktZDM3NTBiZWEtMzI0NC00NGQ4LWE4YTEtMTc3NWUzYmUxNGEzLnBuZyIsIndpZHRoIjoiPD0xMDI0In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.qUu1zhYptY8cS7RkecXB1IQ_AcDV4amWOKSbu4tzr5w",
                postType: "Photo",
            },
        ])
        .then(function () {
            return postTable.findAll();
        })
        .then(function (postTable) {
            console.log(postTable);
        })
        .catch((err) => {
            console.log(err);
        });
};

module.exports = {
    seedPostValues,
};
