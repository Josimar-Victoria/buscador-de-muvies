const API = "https://api.themoviedb.org/3"

export function get(path) {
    return (
        fetch(API + path, {
            headers: {
                Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZTdkNGQxNjFiNWQzN2UyNzQ2OTExNjk0NmRkNjBmZCIsInN1YiI6IjYwY2Q5YjY1MzNhZDhmMDA2ZGU3MTg2ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NbWPBYJKgXjVM0uXtFsZXRPRnsEaw8kJjUFLdvCpnn4",
                "Content-Type": "application/json;charset=utf-8",
            }
        }).then(result => result.json()))
}