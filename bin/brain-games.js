#!/usr/bin/env node
import {end, greeting} from '../src/cli.js';

main();

function main() {
    greeting();
    end();
}
