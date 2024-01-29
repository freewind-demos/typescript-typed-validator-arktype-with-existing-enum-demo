import { type } from 'arktype';

const user = type({
    username: "string|number",
})

console.log({ user, def: user.definition });

type User = typeof user.infer;

const user1: User = {
    username: 'Freewind'
}
const user2: User = {
    username: 111
}

const result = user({ username: true });
console.log(JSON.stringify(result, null, 4));