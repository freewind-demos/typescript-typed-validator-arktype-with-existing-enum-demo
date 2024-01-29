import { type } from 'arktype';

enum Gender {
    Male = 1,
    Female = 2
}

const user = type({
    username: "string|number",
    'gender?': `${Gender.Male}|${Gender.Female}`
})

type User = typeof user.infer;

const user1: User = {
    username: 'Freewind',
    gender: Gender.Male
}
const result = user({ username: true, gender: 'x' });
console.log(JSON.stringify(result, null, 4));