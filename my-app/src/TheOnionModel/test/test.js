'use strict'
//https://github.com/koajs/compose/blob/master/test/test.js
/* eslint-env jest */
const compose = require('../compose')
const assert = require('assert')

function wait (ms){
   return new Promise((resolve) => setTimeout(resolve, ms || 1))
}

function isPromise (x){
    return x && typeof x.then === 'function'
}

describe('Koa Compose', function (){
    it('should work', async ()=>{
        const arr = []
        const stack = []

        stack.push(async (context, next)=>{
            arr.push(1)
            await wait(1)
            await next()
            await wait(1)
            arr.push(6)
        })

        stack.push(async (context, next)=>{
            arr.push(2)
            await wait(1)
            await next()
            await wait(1)
            arr.push(5)
        })

        stack.push(async (context, next)=>{
            arr.push(3)
            await wait(1)
            await next()
            await wait(1)
            arr.push(4)
        })

        await compose(stack)({})
        expect(arr).toEqual(expect.arrayContaining([1,2,3,4,5,6]))
    })

    it('should be able to be called twice', () => {
        const stack = []

        stack.push(async (context, next) => {
            context.arr.push(1)
            await wait(1)
            await next()
            await wait(1)
            context.arr.push(6)
        })

        stack.push(async (context, next) => {
            context.arr.push(2)
            await wait(1)
            await next()
            await wait(1)
            context.arr.push(5)
        })

        stack.push(async (context, next) => {
            context.arr.push(3)
            await wait(1)
            await next()
            await wait(1)
            context.arr.push(4)
        })

        const fn = compose(stack)
        const ctx1 = { arr: [] }
        const ctx2 = { arr: [] }
        const out = [1, 2, 3, 4, 5, 6]

        return fn(ctx1).then(()=>{
            assert.deepEqual(out, ctx1.arr)
            return fn(ctx2)
        }).then(()=>{
            assert.deepEqual(out, ctx2.arr)
        })
    })

    it('should only accept an array', () => {
        expect(() => compose()).toThrow(TypeError)
    })

    it('should create next functions that return a Promise', function () {
        const stack = []
        const arr = []
        for (let i = 0; i < 5; i++) {
          stack.push((context, next) => {
            arr.push(next())
          })
        }
    
        compose(stack)({})
    
        for (const next of arr) {
          assert(isPromise(next), 'one of the functions next is not a Promise')
        }
      })
})

