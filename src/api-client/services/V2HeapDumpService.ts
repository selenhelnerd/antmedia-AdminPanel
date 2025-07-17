/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class V2HeapDumpService {
    /**
     * Returns heap dump.
     * @returns string OK
     * @throws ApiError
     */
    public static getV2HeapDump({
        accept,
    }: {
        accept?: string,
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/heap-dump',
            headers: {
                'Accept': accept,
            },
        });
    }
}
