/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class V2ClusterNodeCountService {
    /**
     * get Node Count
     * @returns string OK
     * @throws ApiError
     */
    public static getV2ClusterNodeCount({
        accept,
    }: {
        accept?: string,
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/cluster/node-count',
            headers: {
                'Accept': accept,
            },
        });
    }
}
