/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ClusterDeleteNodeİdService {
    /**
     * delete Node
     * @returns any OK
     * @throws ApiError
     */
    public static getClusterDeleteNode({
        id,
        accept,
    }: {
        id: string,
        accept?: string,
    }): CancelablePromise<Record<string, any>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/cluster/deleteNode/{id}',
            path: {
                'id': id,
            },
            headers: {
                'Accept': accept,
            },
        });
    }
}
