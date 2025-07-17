/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ClusterNodesOffsetSizeService {
    /**
     * get Node List
     * @returns any OK
     * @throws ApiError
     */
    public static getClusterNodes({
        offset,
        size,
        accept,
    }: {
        offset: string,
        size: string,
        accept?: string,
    }): CancelablePromise<Record<string, any>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/cluster/nodes/{offset}/{size}',
            path: {
                'offset': offset,
                'size': size,
            },
            headers: {
                'Accept': accept,
            },
        });
    }
}
