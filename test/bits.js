const assert = require('assert');

const bits = require('../src/bits');
const getBitsPerElement = bits.getBitsPerElement;
const putNumberInBytes = bits.putNumberInBytes;
const nLongBitMask = bits.nLongBitMask;
const readNumberFromBytes = bits.readNumberFromBytes;


describe('LZW Elements To Bytes', () => {
	describe('getBitsPerElement()', () => {
		it('starting singleton dictionary', () => {
			assert.equal(getBitsPerElement(256), 8);
		});
		it('larger sizes', () => {
			assert.equal(getBitsPerElement(257), 9);
			assert.equal(getBitsPerElement(381), 9);
			assert.equal(getBitsPerElement(511), 9);
			assert.equal(getBitsPerElement(512), 9);
			assert.equal(getBitsPerElement(513), 10);
			assert.equal(getBitsPerElement(1035), 11);
			assert.equal(getBitsPerElement(8081), 13);
			assert.equal(getBitsPerElement(100985), 17);
			assert.equal(getBitsPerElement(12646297897), 34);
		});
	});
	describe('putNumberInBytes()', () => {
		it('less than 8 bits', () => {
			let bytes = new Uint8Array([1, 6, 80, 240, 0]);

			putNumberInBytes(3, 0, 6, bytes);
			assert.deepEqual(bytes, new Uint8Array([6, 6, 80, 240, 0]));

			putNumberInBytes(5, 25, 9, bytes);
			assert.deepEqual(bytes, new Uint8Array([6, 6, 80, 210, 0]));
		});
		it('8 bits', () => {
			let bytes = new Uint8Array(12);
		
			putNumberInBytes(8, 0, 17, bytes);
			assert.deepEqual(bytes, new Uint8Array([17, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]));

			putNumberInBytes(8, 0, 0, bytes);
			assert.deepEqual(bytes, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]));

		});
		it('greater than 8 bits', () => {
			let bytes = new Uint8Array(6);

			putNumberInBytes(9, 0, 385, bytes);
			assert.deepEqual(bytes, new Uint8Array([129, 1, 0, 0, 0, 0]));

			putNumberInBytes(12, 9, 93, bytes);
			assert.deepEqual(bytes, new Uint8Array([129, 187, 0, 0, 0, 0]));

			putNumberInBytes(10, 0, 87, bytes);
			assert.deepEqual(bytes, new Uint8Array([87, 184, 0, 0, 0, 0]));
			

			bytes = new Uint8Array([1, 87, 94, 255, 208, 24, 60, 88, 12]);

			putNumberInBytes(17, 18, 87394, bytes);
			assert.deepEqual(bytes, new Uint8Array([1, 87, 138, 85, 213, 24, 60, 88, 12]));


			bytes = new Uint8Array([1, 87, 94, 255, 208, 24, 60, 88, 12]);

			putNumberInBytes(24, 1, 907111, bytes);
			assert.deepEqual(bytes, new Uint8Array([207, 174, 27, 254, 208, 24, 60, 88, 12]));
		});
	});
	describe('nLongBitMask()', () => {
		it('0 bits long and negative inputs', () => {
			assert.equal(nLongBitMask(0), 0);
			assert.equal(nLongBitMask(-1), 0);
			assert.equal(nLongBitMask(-2), 0);
			assert.equal(nLongBitMask(-17), 0);
			assert.equal(nLongBitMask(-32), 0);
			assert.equal(nLongBitMask(-83), 0);
		});
		it('rest of the cases up to 30 bits', () => {
			assert.equal(nLongBitMask( 1), 0x1);
			assert.equal(nLongBitMask( 2), 0x3);
			assert.equal(nLongBitMask( 3), 0x7);
			assert.equal(nLongBitMask( 4), 0xF);
			assert.equal(nLongBitMask( 5), 0x1F);
			assert.equal(nLongBitMask( 6), 0x3F);
			assert.equal(nLongBitMask( 7), 0x7F);
			assert.equal(nLongBitMask( 8), 0xFF);
			assert.equal(nLongBitMask( 9), 0x1FF);
			assert.equal(nLongBitMask(10), 0x3FF);
			assert.equal(nLongBitMask(11), 0x7FF);
			assert.equal(nLongBitMask(12), 0xFFF);
			assert.equal(nLongBitMask(13), 0x1FFF);
			assert.equal(nLongBitMask(14), 0x3FFF);
			assert.equal(nLongBitMask(15), 0x7FFF);
			assert.equal(nLongBitMask(16), 0xFFFF);
			assert.equal(nLongBitMask(17), 0x1FFFF);
			assert.equal(nLongBitMask(18), 0x3FFFF);
			assert.equal(nLongBitMask(19), 0x7FFFF);
			assert.equal(nLongBitMask(20), 0xFFFFF);
			assert.equal(nLongBitMask(21), 0x1FFFFF);
			assert.equal(nLongBitMask(22), 0x3FFFFF);
			assert.equal(nLongBitMask(23), 0x7FFFFF);
			assert.equal(nLongBitMask(24), 0xFFFFFF);
			assert.equal(nLongBitMask(25), 0x1FFFFFF);
			assert.equal(nLongBitMask(26), 0x3FFFFFF);
			assert.equal(nLongBitMask(27), 0x7FFFFFF);
			assert.equal(nLongBitMask(28), 0xFFFFFFF);
			assert.equal(nLongBitMask(29), 0x1FFFFFFF);
			assert.equal(nLongBitMask(30), 0x3FFFFFFF);
		});
	});
	describe('readNumberFromBytes()', () => {
		it('less than 8 bits', () => {
			let bytes = new Uint8Array([237, 67, 140]);

			assert.equal(readNumberFromBytes(5, 10, bytes), 16);
			assert.equal(readNumberFromBytes(1, 3, bytes), 1);
			assert.equal(readNumberFromBytes(4, 19, bytes), 1);
		});
		it('8 bits', () => {
			let bytes = new Uint8Array([41, 141, 0, 24, 255]);
			assert.equal(readNumberFromBytes(8, 1, bytes), 148);

		});
		it('greater than 8 bits', () => {
			let bytes = new Uint8Array([41, 141, 0, 24, 255]);
			
			assert.equal(readNumberFromBytes(9, 0, bytes), 297);
			assert.equal(readNumberFromBytes(9, 3, bytes), 421);
			assert.equal(readNumberFromBytes(18, 4, bytes), 2258);
		});
	});
});
